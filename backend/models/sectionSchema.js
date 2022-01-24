const mongoose = require('mongoose');

const SectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    textContent: {
        type: String,
        required: true
    }
});

const Section = mongoose.model('Section', SectionSchema)

module.exports = Section;