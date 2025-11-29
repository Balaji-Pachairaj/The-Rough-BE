const Species = require("../modals/Species");

const getAllSpecies = async (req, res, next) => {
  try {
    const species = await Species.find();
    res.status(200).json(species);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getSpeciesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const species = await Species.findById(id);
    if (!species) {
      return res.status(404).json({ error: "Species not found" });
    }
    res.status(200).json(species);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const createSpecies = async (req, res, next) => {
  try {
    const { name, sub_species } = req.body;
    const newSpecies = new Species({ name, sub_species });
    const savedSpecies = await newSpecies.save();
    res.status(201).json(savedSpecies);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const updateSpecies = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req.body, id);
    const updatedSpecies = await Species.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSpecies) {
      return res.status(404).json({ error: "Species not found" });
    }
    res.status(200).json(updatedSpecies);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteSpecies = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSpecies = await Species.findByIdAndDelete(id);
    if (!deletedSpecies) {
      return res.status(404).json({ error: "Species not found" });
    }
    res.status(200).json({ message: "Species deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getAllSpecies,
  getSpeciesById,
  createSpecies,
  updateSpecies,
  deleteSpecies,
};
