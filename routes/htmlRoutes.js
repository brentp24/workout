const router = require('express').Router();
const path = require("path");


router.get("/", function (req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});  //need this rout or else you get a module not defined error. 


router.get("/stats", function (req,res){
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", function (req,res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;