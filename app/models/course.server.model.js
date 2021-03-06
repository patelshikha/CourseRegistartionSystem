// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Define a new 'StudentSchema'
const CourseSchema = new Schema({
	courseCode: {
        type:String,
        required: true

    },
	courseName:  {
        type:String,
        required: true

    },
	section: {
		type: String,
		required: true
	},
	
	semester: {
		type: String,
		required: true,
		
	},

	

student: {
type: Schema.Types.ObjectId,
ref: 'Student'
},




})
// Create the 'User' model out of the 'UserSchema'
mongoose.model('Course', CourseSchema);