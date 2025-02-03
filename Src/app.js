const express = require('express');
const singuproute=require('./Routes/singup');
const bodyparser = require('body-parser');
const  loginroute=require('./Routes/Login')
const createAdminAccount = require('.//scripts/admin');

const cors=require('cors');

const app = express();


const Port=process.env.PORT || 5000;
app.use(bodyparser.json());
app.use(cors());

createAdminAccount();

app.use('/user',singuproute);
app.use('/auth',loginroute);

app.listen(Port,()=>{
    console.log(`Server is Running on port: ${Port}`);
})

