const express = require('express');
const cors = require('cors');
const { login } = require('../Controler/Login'); // Ensure the correct import

const router = express.Router(); // Fix the router declaration

router.use(cors());

router.post('/login', login); // Ensure the function name is correct

module.exports = router;
