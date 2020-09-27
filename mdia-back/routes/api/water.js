const express = require('express');
const router = express.Router();
const Water = require('../../models/Water.js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

router.route('/').get(async (req, res) => {
    const water = await Water.query();
    res.json(water);
}).post(async (req, res) => {
    const { waterData_date, waterData_data } = req.body;
    try {
        const water = await Water.query().insert({ waterData_date, waterData_data, })
        res.status(201).send(equipment)
    } catch (err) {
        res.json(err)
    }
});

module.exports = router