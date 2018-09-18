const mongoose = require('mongoose');

let dataSchema = {
    title: String,
    description: String,
    url: String
};

let videosSchema = new mongoose.Schema({
    en: dataSchema,
    fr: dataSchema
}, { timestamps: true });

mongoose.model('Videos', videosSchema);