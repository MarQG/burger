var express = require('express');

var router = express.Router();

var burgers = require("../models/burger");

router.get("/", function(req, res){
    res.render("index");
});


module.exports = router;