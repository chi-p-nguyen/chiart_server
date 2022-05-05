const express = require('express');
const router = express.Router();

const { mongoose } = require('mongoose');
const { conn } = require('../db/mongoConnection');

// Init gfs
let gfs;
// once(): a Node one time eventlistener https://nodejs.org/api/events.html#emitteronceeventname-listener
conn.once('open', () => {
    // Init stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads"
    })
})

// Accepted file types
const fileTypes = ["image/jpeg", "image/jpg", "image/png"];

// @route GET /image/:filename
// @desc Display Image
router.get('/:filename', (req, res) => {
    gfs.find({ filename: req.params.filename }).toArray((err, file) => {
        file = file[0];
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exist'
            });
        }

        // Check if image
        if (fileTypes.includes(file.contentType)) {
            // Read output to browser
            gfs.openDownloadStreamByName(file.filename).pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        }
    })
})

module.exports = router;