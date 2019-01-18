var express = require("express");
var router = express.Router();

var authController = require("../controllers/authController");

router.get('/register', authController.register);
  
router.get('/', authController.login);


module.exports = router;