const express = require('express');

const singupcontroller=require('../Controler/singup');

const router=express.Router();

router.post('/register',singupcontroller.createUser);

module.exports = router;