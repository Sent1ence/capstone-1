
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Public")
    },
    filename: (req, file, cb) => {
        const parts = file.mimetype.split('/')
        const name = file.originalname.split('.');
        cb(null, `${name[0]}.${parts[1]}`);
    }
})

const upload = multer({
    storage, fileFilter: (req, file, cb) => {
        // allow images only
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image are allowed.'), false);
        }
        cb(null, true);
    }
})

router.post('/', upload.single('avatar'), (req, res) => {
    try {
        console.log('storage location is', req.hostname + '/' + req.file.path);
        return res.send(req.file);
    } catch (err) {
        res.json(err)
    }

})

module.exports = router;