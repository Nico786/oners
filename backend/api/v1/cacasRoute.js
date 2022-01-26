const express = require("express");
const router = express.Router();
const Caca = require("../../models/cacaSchema");

// Getting all
router.get("/", async (req, res) => {
  try {
    const cacas = await Caca.find()
    res.json(cacas)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

 // Getting one by id
router.get("/:id", getCaca, (req, res) => {
  res.send(res.caca)
})

// Creating one
router.post('/', async (req, res) => {
  console.log(req.body)
  const caca = new Caca({
    nom: req.body.nom,
    contenu: req.body.contenu,
  })
  console.log(req.body.contenu);
  try {
    const newCaca = await caca.save()
    res.status(201).json(newCaca)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating one by id
router.patch("/:id", getCaca, async (req, res) => {
  if (req.body.nom != null) {
    res.caca.nom = req.body.nom;
  }
  if (req.body.contenu != null) {
    res.caca.contenu = req.body.contenu;
  }
  try {
    const updatedCaca = await res.caca.save()
    res.json(updatedCaca)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.put("/:id", getCaca, async (req, res) => {
  if (req.body.nom != null) {
    res.caca.nom = req.body.nom;
    console.log(req.body.contenu)
  }
  if (req.body.contenu != null) {
    console.log(req.body.contenu)
    res.caca.contenu = req.body.contenu; /// TEST
  }
  try {
    const updatedCaca = await res.caca.save()
    res.json(updatedCaca);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting one by id
router.delete("/:id", getCaca, async (req, res) => {
  try {
    await res.caca.remove();
    res.json({ message: "Deleted caca" });
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getCaca(req, res, next) {
  // Middleware function
  let caca;
  try {
    caca = await Caca.findById(req.params.id)
    if (caca == null) {
      return res.status(404).json({ message: "Cannot find caca" })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.caca = caca;
  next()
}

module.exports = router;