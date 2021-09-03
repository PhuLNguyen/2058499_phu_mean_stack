// load the module
let mongoose = require("mongoose");
mongoose.pluralize(null); // avoid create coolection name lowercase and postfix 's'

// create the schema
let courseSchema = mongoose.Schema({
    _id : Number,
    name : String,
    description : String,
    amount : Number
})

// using schema creating model
// 1st param is the collection name
// 2nd param is the schema reference
let courseModel = mongoose.model("Course", courseSchema);

module.exports = courseModel; // we can import using "require" in another file
