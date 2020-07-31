var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/2', function(req, res, next) {
  // res.render("<html></html>",{title:"title"});
  res.render("main.html");
});

module.exports = router;
