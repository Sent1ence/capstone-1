const multer = require('multer');
const Equipment = require('../../models/Equipment.js');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Public")
    },
    filename: async (req, file, cb) => {
        const parts = file.mimetype.split('/')
        try {
            const equipment = await Equipment.query().select('equipment_no').orderBy('equipment_no', 'desc').limit(1);
            let id = JSON.parse(JSON.stringify(equipment))
            cb(null, `Equipment-${id[0].equipment_no}.${parts[1]}`);
        } catch (err) {
            console.log(err)
        }

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

module.exports = upload