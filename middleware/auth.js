const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function(req, res, next) {
    // Get token from the Header
    const token = req.header('x-auth-token');

    // Check if no token 
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied.' })
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid.' });
    }
};