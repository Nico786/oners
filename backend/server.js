const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

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

app.get('/', (req, res) => {
    res.send("Hello World");
})

const sectionsRouter = require('./routes/sectionsRoute');
app.use('/sections', sectionsRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})