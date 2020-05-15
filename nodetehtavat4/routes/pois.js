const express = require('express');
const db = require('../db');

// authorization middleware
const authorize = require('./authorize');

const router = express.Router();

const validatePoi = poi => {
    const { name, description, city, coordinates } = poi;

    if (name && description && city && coordinates.lat && coordinates.lng) {
        return poi;
    } else {
        return;
    }
}


router.get('/', (req, res) => {
    res.status(200).send(db.getPoi());
});

router.get('/:id', (req, res) => {
    const poi = db.getPoi(req.params.id);

    if (poi) {
        res.status(200).send(poi);
    } else {
        res.status(404).send();
    }
});

router.post('/', authorize, (req, res) => {
    const poi = req.body;
    console.log(validatePoi(poi), poi);
    if (validatePoi(poi)) {
        console.log('Create', poi);
        res.status(201).send(db.createPoi(poi));
    } else {
        res.status(400).send();
    }
});

module.exports = router;