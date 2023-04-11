var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
