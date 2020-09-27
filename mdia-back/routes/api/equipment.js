const express = require('express');
const router = express.Router();
const Equipment = require('../../models/Equipment.js');
const dotenv = require('dotenv');
const path = require('path');
const upload = require('../middleware/uploadstorage')


dotenv.config({ path: path.join(__dirname, '../../.env') });

router.get('/', async (req, res) => {
    const equipment = await Equipment.query();
    res.json(equipment);
});

router.post('/', async (req, res) => {
    const { equipment_name, equipment_category } = req.body;
    try {
        const equipment = await Equipment.query().insert({ equipment_name, equipment_category, })
        res.status(201).send(equipment)
    } catch (err) {
        res.json(err)
    }
});

router.post('/image', upload.single('image'), async (req, res) => {
    try {
        const { equipment_name, equipment_category } = req.body;
        const equipment = await Equipment.query().insert({ equipment_name, equipment_category, equipment_name, image })
        res.status(201).send(equipment)
    } catch (err) {
        res.json(err)
    }
});

router.post('/test', upload.single('avatar'), async (req, res) => {
    try {
        console.log('storage location is', req.hostname + '/' + req.file.path);
        return res.send(req.file);
    } catch (err) {
        res.json(err)
    }

})

module.exports = router