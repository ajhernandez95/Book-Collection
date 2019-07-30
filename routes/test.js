const express = require('express');
const router = express.Router();

const authCookie = require('../middleware/authCookie');

router.get('/', authCookie, (req, res) => {
  res.send('success');
});

module.exports = router;
