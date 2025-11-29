const router = require("express").Router();
const SpeciesController = require("../controllers/Species");

// Get All Species
router.get("/", SpeciesController.getAllSpecies);

router.get("/:id", SpeciesController.getSpeciesById);

// Create Species
router.post("/create", SpeciesController.createSpecies);

// Update Species
router.put("/update/:id", SpeciesController.updateSpecies);

// Delete Species
router.delete("/delete/:id", SpeciesController.deleteSpecies);

module.exports = router;
