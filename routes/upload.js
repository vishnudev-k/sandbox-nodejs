var express = require('express');
var router = express.Router();
require('dotenv').config();




/* GET users listing. */
router.get('/', function(req, res, next) {
  const request = require('request');
  request(process.env.service_host_env, function (error, response, body) {//'http://app-cli.image-uploader.svc.cluster.local:8080'
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
  //res.send('respond with a resource');
});


router.get('/env', function(req, res, next) {
    res.send(process.env);
});


router.get('/host', function(req, res, next) {
  const request = require('request');
  request('http://app-cli.image-uploader.svc.cluster.local:8080', function (error, response, body) {//
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
