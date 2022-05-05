const { mongoose } = require('mongoose');
const mongoURI = process.env.NODE_ENV === 'production' ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI;

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads' // should match gfs collection name
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });
module.exports = { conn, mongoURI, upload };