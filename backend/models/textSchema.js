const mongoose = require('mongoose');

const textSchema = mongoose.Schema({
    section: {type: String, required:true},
    content: {type: Array, required: true}
});

const Text = mongoose.model('Text', textSchema)

module.exports = Text;