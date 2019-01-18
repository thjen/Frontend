var express = require("express");
var router = express.Router();

var newfeedController = require("../controllers/newfeedController");

router.get('/message', newfeedController.newfeedMessage);

module.exports = router;