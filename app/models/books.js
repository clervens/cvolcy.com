const mongoose = require('mongoose');

let booksSchema = new mongoose.Schema({
    sort: Number,
    en: {
        title: String,
        Description: String
    },
    fr: {
        title: String,
        Description: String
    }
}, { timestamps: true });

mongoose.model('Books', booksSchema);