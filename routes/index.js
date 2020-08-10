var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sendPage', function(req, res, next) {
  
  res.render("main.html");
});

router.get('/firstPage', function(req, res, next) {
  
  res.render('firstPage.html');
});


module.exports = router;
