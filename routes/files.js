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

// @route GET /files
// @desc Display all files in JSON
router.get('/', (req, res) => {
    gfs.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            })
        }

        // Files exist
        return res.json(files);
    })
})

// @route GET /files/:filename
// @desc Display single file object
router.get('/:filename', (req, res) => {
    gfs.find({ filename: req.params.filename }).toArray((err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exist'
            });
        }

        // File exists
        return res.json(file);

    });
});

// @route GET /image/:filename
// @desc Display Image
router.get('/image/:filename', (req, res) => {
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

// @route DELETE /files/:id
// @desc Delete file
router.delete('/:id', (req, res) => {
    gfs.remove({
            _id: req.params.id,
            root: 'uploads'
        },
        (err, data) => {
            if (err) {
                return res.status(404).json({ err: err });
            }

            res.redirect('/');
        })
})

module.exports = router;