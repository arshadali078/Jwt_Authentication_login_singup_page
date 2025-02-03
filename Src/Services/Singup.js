const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createuser(UserData) {
    const { name, email, password } = UserData;
    
    // Wait for the password to be hashed before proceeding
    const hashpassword = await bcrypt.hash(password, 10);

    const createuser = new User({
        name,
        email,
        password: hashpassword,  // Store the hashed password
        role: 'customer'
    });

    const saveduser = await createuser.save();
    return saveduser;
}

module.exports = { createuser };
