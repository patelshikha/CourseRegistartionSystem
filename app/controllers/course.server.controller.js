// Load the module dependencies
const Course = require('mongoose').model('Course');
const User = require('mongoose').model('Student');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const jwtExpirySeconds = 300;
const jwtKey =config.secretKey;


// Create a new 'create' controller method; adds a new user
exports.create = function (req, res, next) {
    // Create a new instance of the 'User' Mongoose model
    var course = new Course(req.body); //get data from ejs page and attaches them to the model
   // console.log("body: " + req.body.username);

    // Use the 'User' instance's 'save' method to save a new user document
    course.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(Course);
            
        }
    });
};
exports.getEnrolledCourses = function (req, res, next) {
    // Use the 'User' instance's 'find' method to retrieve a new user document
    console.log('getEnrolledCourses',req.body)
    Course.find({student:req.body._id}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};
exports.getEnrolledStudents = function (req, res, next) {
    // Use the 'User' instance's 'find' method to retrieve a new user document
    console.log('getEnrolledStudents',req.body.course)
    Course.find({courseCode:req.body.course.courseCode}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
          
            var studentId = [];
            courses.forEach(function (course) {
                studentId.push(course.student);
            });
          
            let students=[];
            studentId.forEach(function (id) {
                console.log('students',id)
                User.find({_id:id}, function (err, student) {
                    if (err) {
                        return next(err);
                    } else {
                        console.log('inside',student)
students.push(student);
console.log('push students',students)      
                    }
                });
            });
            console.log('students',students)
            res.json(students);
        }
    });
};
exports.getAllCourses = function (req, res, next) {
    // Use the 'User' instance's 'find' method to retrieve a new user document
    console.log('getAllCourses',req.body)
    Course.find({}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};
exports.getMyCourses = function (req, res, next) {
    // Use the 'User' instance's 'find' method to retrieve a new user document
    console.log('getAllCourses',req.body)
    Course.find({student: req.body.student}, function (err, courses) {
        if (err) {
            return next(err);
        } else {
            res.json(courses);
        }
    });
};
//update a user by id
exports.update = function(req, res, next) {
    console.log("here",req.body);
   Course.findByIdAndUpdate(req.body._id, req.body, function (err, course) {
     if (err) {
       console.log(err);
       return next(err);
     }
      res.json(course);
    });
};
exports.read = function(req, res) {
	// Use the 'response' object to send a JSON response
	res.json(req.course);
};
// delete a user by id
exports.delete = function(req, res, next) {
    console.log("delete",req.body);
    Course.findByIdAndRemove(req.body._id, req.body, function (err, course) {
      if (err) return next(err);
      res.json(course);
    });
};