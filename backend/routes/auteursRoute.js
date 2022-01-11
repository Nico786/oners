const express = require("express");
const router = express.Router();
const Auteur = require("../models/auteurSchema");

// Getting all
router.get("/", async (req, res) => {
  try {
    const auteurs = await Auteur.find();
    res.json(auteurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Getting one by id
// router.get("/:id", getSection, (req, res) => {
//   res.send(res.auteur);
// });

// // Creating one
// router.post("/", async (req, res) => {
//   const auteur = new Auteur({
//     name: req.body.name,
//     textContent: req.body.textContent,
//   });
//   try {
//     const newSection = await auteur.save();
//     res.status(201).json(newSection);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Updating one by id
// router.patch("/:id", getSection, async (req, res) => {
//   if (req.body.name != null) {
//     res.auteur.name = req.body.name;
//   }
//   if (req.body.textContent != null) {
//     res.auteur.textContent = req.auteur.textContent;
//   }
//   try {
//     const updatedSection = await res.auteur.save();
//     res.json(updatedSection);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Deleting one by id
// router.delete("/:id", getSection, async (req, res) => {
//   try {
//     await res.auteur.remove();
//     res.json({ message: "Deleted auteur" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getSection(req, res, next) {
//   // Middleware function
//   let auteur;
//   try {
//     auteur = await Auteur.findById(req.params.id);
//     if (auteur == null) {
//       return res.status(404).json({ message: "Cannot find auteur" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   res.auteur = auteur;
//   next();
// }

module.exports = router;
