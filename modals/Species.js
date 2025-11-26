const mongoose = require("mongoose");

const SpeciesModal = new mongoose.Schema({
  name: { type: String, required: true },
  sub_species: [{ type: String, required: false }],
  createdAt: { type: Date, default: Date.now },
});

const Species = mongoose.model("Species", SpeciesModal);
module.exports = Species;
