const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function auth(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'thisissparta');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }


        req.token = token;
        req.user = user;
        
        next();
    } catch (err) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
}


module.exports = auth;