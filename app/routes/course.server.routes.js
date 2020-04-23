// Load the 'users' controller
var courses = require('../controllers/course.server.controller.js');
var express = require('express');
var router = express.Router();
// Define the routes module' method
module.exports = function (app) {
   // app.put('/editCourse/:courseId',courses.update);
    app.post('/addCourse', courses.create);
    app.post('/getmyCourses', courses.getMyCourses);
    app.post('/getAllCourses', courses.getAllCourses);
    app.post('/getEnrolledCourses', courses.getEnrolledCourses);
    app.post('/getEnrolledStudents', courses.getEnrolledStudents);
    // Set up the 'users' Sparameterized routes 
    
    app.put('/editCourse',courses.update);
    app.put('/deleteCourse',courses.delete);
    
};

