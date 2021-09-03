// load the module files, i.e. user-defined module
let courseModel = require("../model/course.model");

// create CRUD functions for the "Course" collection
let createCourse = (request, response) => {
    let course = request.body;

    courseModel.insertMany(course, (err, result) => {
        if (!err) {
            response.json(result);
        } else {
            response.json(err);
        }
    })
}

let retrieveCourse = (request, response) => {
    courseModel.find({}, (err, courses) => {
        if (!err) {
            response.json(courses);
        } else {
            response.json(err);
        }
    })
}

let updateCourse = (request, response) => {
    let course = request.body;
    courseModel.updateOne(
        {_id : course._id},
        {$set : {amount : course.amount}}, (err, result) => {
            if (!err) {
                response.json(result);
            } else {
                response.json(err);
            }
        }
    )
}

let deleteCourse = (request, response) => {
    let courseId = request.params.id;
    courseModel.deleteOne(
        {_id : courseId},
        (err, result) => {
            if (!err) {
                response.json(result);
            } else {
                response.json(err);
            }
        }
    )
}

// export functions must be inside curly braces
module.exports = {createCourse, retrieveCourse, updateCourse, deleteCourse};