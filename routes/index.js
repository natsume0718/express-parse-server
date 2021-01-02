var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send(200, { text: 'hello world' });
});
router.post('/', function (req, res, next) {
  if (!req.is('application/json')) {
    res.send(400);
  }
  res.send(201, req.body);
});

module.exports = router;
