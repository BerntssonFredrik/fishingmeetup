const { Router } = require("express");
const router = new Router();

const eventController = require("../controllers/eventController");

router.route("/").post(eventController.addEvent);

module.exports = router;
