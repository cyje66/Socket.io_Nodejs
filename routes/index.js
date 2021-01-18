var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 導向 views/index.ejs
  // res.render('index', { title: 'Express' });
  res.render('socket');
});

module.exports = router;
