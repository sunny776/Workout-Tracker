const mongoose = require("mongoose");
const path = require("path");

const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost", { useNewUrlParser: true});

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'))
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'stats.html'))
});


app.listen(PORT, function() {
    console.log(`Runnning on port ${PORT}`);
})