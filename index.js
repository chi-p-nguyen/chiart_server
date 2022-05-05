const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "development") {
    require('dotenv').config();
}

// @route /upload
const upload = require('./routes/upload');
app.use('/upload', upload);

// @route /files
const files = require('./routes/files');
app.use('/files', files);

// @route /files
const image = require('./routes/image');
app.use('/image', image);

app.use(express.static(__dirname + '/public/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})