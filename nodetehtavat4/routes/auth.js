const express = require('express');
const tokens = require('../tokens');

const users = [
    {username: "mark", password: "giraffe"}
]

const router = express.Router();

router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(username. password);
    if (users.find(user => user.username === username && user.password === password)) {
        const token = tokens.create(username);
        console.log('token:', token)
        res.send({token: token });
    } else {
        res.status(401).send();
    }
});

module.exports = router;