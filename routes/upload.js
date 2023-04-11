var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const request = require('request');
  request('http://www.google.com', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
  //res.send('respond with a resource');
});


router.post('/register', async (req, res) => {
  let result = await registerServices.register(req.body)
  if(result.code != 200) return res.status(result.code).json({
      message: result.message,
      success: false
  })

  return res.status(200).json({ user: result.user, success: true })
})

module.exports = router;
