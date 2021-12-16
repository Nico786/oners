const express = require('express');
const router = express.Router();
const Section = require("../models/sectionSchema");


// Getting all
router.get('/', async (req, res) => {
    try {
        const sections = await Section.find();
        res.json(sections);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// Getting one by id
router.get('/:id', getSection, (req, res) => {
    res.send(res.section);
})

// Creating one
router.post('/', async (req, res) => {
    const section = new Section({
        name : req.body.name,
        textContent : req.body.textContent
    });
    try {
        const newSection = await section.save();
        res.status(201).json(newSection);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// Updating one by id
router.patch('/:id', getSection, async (req, res) => {
    if (req.body.name != null) {
        res.section.name = req.body.name;
    }
    if (req.body.textContent != null) {
        res.section.textContent = req.section.textContent;
    }
    try {
        const updatedSection = await res.section.save();
        res.json(updatedSection);
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting one by id
router.delete('/:id', getSection, async (req, res) => {
    try {
        await res.section.remove();
        res.json({ message: 'Deleted section'});
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getSection(req, res, next) { // Middleware function
    let section;
    try {
        section = await Section.findById(req.params.id);
        if (section == null) {
            return res.status(404).json({ message: 'Cannot find section'} );
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.section = section;
    next();
}

module.exports = router;
