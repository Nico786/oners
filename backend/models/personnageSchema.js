const mongoose = require("mongoose");

const PersonnageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  backgroundColorModal: {
    type: String,
    required: true,
  },
});

const Personnage = mongoose.model("Personnage", PersonnageSchema);

module.exports = Personnage;