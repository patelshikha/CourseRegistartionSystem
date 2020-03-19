// Load the 'users' controller
var users = require('../controllers/student.server.controller');
var express = require('express');
var router = express.Router();
// Define the routes module' method
module.exports = function (app) {
  
    app.get("/users",users.list); //go to http://localhost:3000/users to see the list
    //handle a post request made to root path
    app.post('/', users.create);
    //
    // Set up the 'users' parameterized routes 
	app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete)
  
    app.param('userId', users.userByID);
    //authenticate user
    app.post('/signin', users.authenticate);
    app.get('/signout', users.signout);

    //path to a protected page
	app.get('/welcome',users.welcome);
    
};

