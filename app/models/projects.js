const mongoose = require('mongoose');

let projectsSchema = new mongoose.Schema({
    id: String,
    en: {
        title: String,
        subtitle: String,
        content: String
    },
    fr: {
        title: String,
        subtitle: String,
        content: String
    }
}, { timestamps: true });

mongoose.model('Projects', projectsSchema);