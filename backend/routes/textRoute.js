const express = require('express');
const router = express.Router();
const Texts = require("../models/textSchema");

router.get('/', (req,res) =>{
    Texts.find()
    .then(text => res.json(text))
    .catch(err => res.status(400).json(`error: ${err}`))
})

module.exports = router;
