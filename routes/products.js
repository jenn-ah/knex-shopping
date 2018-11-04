const express = require('express');
const db = require('../db/knex');
const router = express.Router();

router.get('/smoke', (req, res) => {
  res.send('smoke test');
});


module.exports = router;