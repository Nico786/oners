const express = require("express");
const router = express.Router();
const Personnage = require("../../models/personnageSchema");

// Getting all
router.get("/", async (req, res) => {
  try {
    const personnages = await Personnage.find();
    res.json(personnages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one by id
router.get("/:id", getPersonnage, (req, res) => {
  res.send(res.personnage);
});

// Creating one
router.post("/", async (req, res) => {
  const personnage = new Personnage({
    name: req.body.name,
    description: req.body.description,
    backgroundColorModal: req.body.backgroundColorModal,
  });
  try {
    const newPersonnage = await personnage.save();
    res.status(201).json(newPersonnage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one by id
router.patch("/:id", getPersonnage, async (req, res) => {
  if (req.body.name != null) {
    res.personnage.name = req.body.name;
  }
  if (req.body.description != null) {
    res.personnage.description = req.body.description;
  }
  if (req.body.backgroundColorModal != null) {
    res.personnage.backgroundColorModal = req.body.backgroundColorModal;
  }
  try {
    const updatedPersonnage = await res.personnage.save();
    res.json(updatedPersonnage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", getPersonnage, async (req, res) => {
  if (req.body.name != null) {
    res.personnage.name = req.body.name;
  }
  if (req.body.description != null) {
    res.personnage.description = req.body.description;
  }
  if (req.body.backgroundColorModal != null) {
    res.personnage.backgroundColorModal = req.body.backgroundColorModal;
  }
  try {
    const updatedPersonnage = await res.personnage.save();
    res.json(updatedPersonnage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one by id
router.delete("/:id", getPersonnage, async (req, res) => {
  try {
    await res.personnage.remove();
    res.json({ message: "Deleted personnage" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPersonnage(req, res, next) {
  // Middleware function
  let personnage;
  try {
    personnage = await Personnage.findById(req.params.id);
    if (personnage == null) {
      return res.status(404).json({ message: "Cannot find personnage" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.personnage = personnage;
  next();
}

module.exports = router;