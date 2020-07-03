const express = require('express');
const router = express.Router();

//@route        GET api/contacts
//@desc         Get all users contacts
//access        Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route        POST api/contacts
//@desc         Add new contact
//access        Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

//@route        PUT api/contacts
//@desc         Update contact
//access        Private
router.put('/', (req, res) => {
  res.send('Update contact');
});

//@route        DELETE api/contacts
//@desc         Delete contact
//access        Private
router.delete('/', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
