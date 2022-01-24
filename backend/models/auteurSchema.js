const mongoose = require("mongoose");

const AuteurSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  job:{
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Auteur = mongoose.model("Auteur", AuteurSchema);

module.exports = Auteur;
