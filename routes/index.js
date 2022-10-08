const express = require('express');
const router = express.Router();

// GET /feed/posts
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));
// localhost:8080/professional/
module.exports = router;
