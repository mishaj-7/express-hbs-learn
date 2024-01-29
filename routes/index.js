var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'mishaj"s express js',
    passsion: 'adrenet mern explorer'
  });
});

module.exports = router;
