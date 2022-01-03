const express = require('express');
const router = express.Router();
const Sections = require("../models/sectionSchema");

router.get('/', (req,res) =>{
    Sections.find()
    .then(text => res.json(text))
    .catch(err => res.status(400).json(`error: ${err}`))
})

module.exports = router;
