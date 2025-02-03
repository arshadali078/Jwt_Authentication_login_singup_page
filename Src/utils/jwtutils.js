const jwt = require('jsonwebtoken');
const config = require('../Configration/jwtconfig'); // Ensure correct path

// Check if secretkey is loaded properly
if (!config.secretkey) {
    throw new Error("JWT Secret key is missing! Check jwtconfig.js");
}

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };

    return jwt.sign(payload, config.secretkey, { expiresIn: '1h' });
}

module.exports = { generateToken };
