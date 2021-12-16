const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema(   // Object section schema
    {
    name : {type: String, required:true},
    textcontent: {type: Array, required: true}
});

const Section = mongoose.model('Section', sectionSchema)

module.exports = Section;