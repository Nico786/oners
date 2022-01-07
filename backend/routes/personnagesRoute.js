const express = require("express");
const router = express.Router();
const Personnage = require("../models/personnageSchema");

// Getting all
router.get("/", async (req, res) => {
  try {
    const personnages = await Personnage.find();
    res.json(personnages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Getting one by id
// router.get("/:id", getSection, (req, res) => {
//   res.send(res.personnage);
// });

// // Creating one
// router.post("/", async (req, res) => {
//   const personnage = new Personnage({
//     name: req.body.name,
//     textContent: req.body.textContent,
//   });
//   try {
//     const newSection = await personnage.save();
//     res.status(201).json(newSection);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Updating one by id
// router.patch("/:id", getSection, async (req, res) => {
//   if (req.body.name != null) {
//     res.personnage.name = req.body.name;
//   }
//   if (req.body.textContent != null) {
//     res.personnage.textContent = req.personnage.textContent;
//   }
//   try {
//     const updatedSection = await res.personnage.save();
//     res.json(updatedSection);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Deleting one by id
// router.delete("/:id", getSection, async (req, res) => {
//   try {
//     await res.personnage.remove();
//     res.json({ message: "Deleted personnage" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// async function getSection(req, res, next) {
//   // Middleware function
//   let personnage;
//   try {
//     personnage = await Personnage.findById(req.params.id);
//     if (personnage == null) {
//       return res.status(404).json({ message: "Cannot find personnage" });
//     }
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
//   res.personnage = personnage;
//   next();
// }

module.exports = router;
