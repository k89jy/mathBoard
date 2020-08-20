var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');

var MongoClinet = mongodb.MongoClient;

var url = process.env.MONGO_URL + process.env.PORT
//const { collection } = require('../models/todo');

/* GET home page. */
router.get('/sendPage', function(req, res, next) {
  


  res.render("main.html");
});

router.get('/firstPage', function(req, res, next) {
  

  MongoClinet.connect(url, function(db, err){
    if(err){
      console.log(err)
    }else{
      console.log('db connect success')
    
    }
  })
  res.render('firstPage.html');
});

router.post('/postPerson',function(req ,res,next){


  



})

module.exports = router;
