const express = require('express');
const router = express.Router();

//@route        GET api/auth
//@desc         Login user
//access        Private
router.get('/', (req, res) => {
  res.send('Login user');
});

//@route        POST api/auth
//@desc         Auth user & get token
//access        Public
router.post('/', (req, res) => {
  res.send('User logged in');
});

module.exports = router;
