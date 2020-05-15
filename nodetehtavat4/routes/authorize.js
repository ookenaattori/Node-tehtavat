const tokens = require('../tokens');

const authorize = (req, res, next) => {
    const header = req.header('Authorization');

    if (header) {
        const auth = req.header('Authorization').split(' ');
        if (auth[0] === 'Bearer' && tokens.verify(auth[1])) {
            next();
        }
    }

    res.status(401).send();
}

module.exports = authorize;