const { Router } = require("express");
const router = new Router();

const eventController = require("../controllers/eventController");

router.route("/addEvent").post(eventController.addEvent)
router.route("/getAll").get(eventController.getEvents);
router.route("/getOne/:id").get(eventController.getEvent);
router.route("/addAttendee/:id").post(eventController.addAttendee);
router.route("/addComment/:id").post(eventController.addComment);


module.exports = router;
