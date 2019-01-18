var express = require("express");
var router = express.Router();

var timelineController = require("../controllers/timelineController");

router.get('/', timelineController.timeline);
  
router.get('/image', timelineController.timelineImage);
  
router.get('/friends', timelineController.timelineFriends);
  
router.get('/about', timelineController.timelineAbout);

router.get('/update-about', timelineController.timelineUpdateAbout);

module.exports = router;