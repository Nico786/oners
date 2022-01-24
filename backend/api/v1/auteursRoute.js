const express = require("express");
const router = express.Router();
const Auteur = require("../../models/auteurSchema");

// Getting all
router.get("/", async (req, res) => {
  try {
    const auteurs = await Auteur.find();
    res.json(auteurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one by id
router.get("/:id", getAuteur, (req, res) => {
  res.send(res.auteur);
});

// Creating one
router.post("/", async (req, res) => {
  const auteur = new Auteur({
    name: req.body.name,
    job: req.body.job,
    description : req.body.description,
  });
  try {
    const newAuteur = await auteur.save();
    res.status(201).json(newAuteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one by id
router.patch("/:id", getAuteur, async (req, res) => {
  if (req.body.name != null) {
    res.auteur.name = req.body.name;
  }
  if (req.body.job != null) {
    res.auteur.job = req.body.job;
  }
  if (req.body.description != null) {
    res.auteur.description = req.body.description;
  }
  try {
    const updatedAuteur = await res.auteur.save();
    res.json(updatedAuteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", getAuteur, async (req, res) => {
  if (req.body.name != null) {
    res.auteur.name = req.body.name;
  }
  if (req.body.job != null) {
    res.auteur.job = req.body.job;
  }
  if (req.body.description != null) {
    res.auteur.description = req.body.description;
  }
  try {
    const updatedAuteur = await res.auteur.save();
    res.json(updatedAuteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one by id
router.delete("/:id", getAuteur, async (req, res) => {
  try {
    await res.auteur.remove();
    res.json({ message: "Deleted auteur" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getAuteur(req, res, next) {
  // Middleware function
  let auteur;
  try {
    auteur = await Auteur.findById(req.params.id);
    if (auteur == null) {
      return res.status(404).json({ message: "Cannot find auteur" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.auteur = auteur;
  next();
}

module.exports = router;
