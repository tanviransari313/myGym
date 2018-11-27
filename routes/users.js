var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/users.controllers.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource1111');
});

// router.get('/createUser', function(req, res, next) {
//   res.send('create user testing');
// });


router.get('/createUser', usersControllers.createUser);

module.exports = router;
