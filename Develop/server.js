const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");

const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 5000;

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/deep-thoughts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);

app.listen(PORT, function () {
  console.log(`Runnning on port ${PORT}`);
});
