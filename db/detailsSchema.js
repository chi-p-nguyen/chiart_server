const { mongoose } = require('mongoose');
const { Schema } = mongoose;
const ObjectId = require('mongodb').ObjectId;

const detailsSchema = new Schema({
    title: String,
    description: String,
    dateCompleted: Date,
    fileID: ObjectId
});

module.exports = detailsSchema;