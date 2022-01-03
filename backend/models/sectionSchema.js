const mongoose = require('mongoose');

const SectionSchema = mongoose.Schema({
    sections: [Object]
});

const Section = mongoose.model('Section', SectionSchema)

module.exports = Section;