var express = require('express');
var router = express.Router();

router.get('/api/tweets', function(req, res) {
  return res.send({
    tweets: [1, 2, 3, 4, 5]
  })
});

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
// define the home page route
router.get('/birds', function(req, res) {
  console.log(res);
  res.send('Birds home page');
})
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
