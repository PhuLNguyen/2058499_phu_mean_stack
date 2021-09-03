// load the expresss module
let express = require("express");

// instantiate router from express to route request to controller function based on the sub-path
let router = express.Router();

// load the controller
let courseController = require("../controller/course.controller");

// route the request based on the sub-path
router.post("/create", courseController.createCourse);
router.get("/retrieve", courseController.retrieveCourse);
router.put("/update", courseController.updateCourse);
router.delete("/delete/:id", courseController.deleteCourse);

// export the router for the app.js to use
module.exports = router;
