const express = require('express');
const router = express.Router();

const { conn, upload } = require('../db/mongoConnection');
const detailsSchema = require('../db/detailsSchema');
const Details = conn.model('details', detailsSchema);

// @route POST /upload
// @desc Uploads file to DB
router.post('/', upload.single('myfile'), (req, res) => {
    const fileID = req.file.id;
    const details = new Details({
        ...req.body,
        fileID
    });
    details.save((err, doc) => {
        if (err) throw err;
        res.send(doc);
    });
})


module.exports = router;