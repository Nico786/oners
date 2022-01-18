const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path')


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(`${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connexion à mongoDB réussie")
});


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')))


app.get('/', (req, res) => {
    res.send("Hello World");
})

const sectionsRouter = require('./api/v1/sectionsRoute');
app.use('/api/v1/sections', sectionsRouter);

const personnagesRouter = require("./api/v1/personnagesRoute");
app.use("/api/v1/personnages", personnagesRouter);

const auteursRouter = require("./api/v1/auteursRoute");
app.use("/api/v1/auteurs", auteursRouter);

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'))
  })

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})