const express = require("express");
var morgan = require('morgan');  
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined')); // logs in the terminal (I think)
app.use(express.static("public"));

const databaseUrl = "workout";
const collections = ["exercise"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
    console.log("Database Error:", error);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://workout:password!59@ds019491.mlab.com:19491/heroku_fhc0qgk0", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/index"));

//Listen on port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

