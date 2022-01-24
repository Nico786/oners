const mongoose = require("mongoose");

const CacaSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  contenu: {
    type: String,
    required: true,
  },
});

const Caca = mongoose.model("Caca", CacaSchema);

module.exports = Caca;