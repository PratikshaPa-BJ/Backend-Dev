const express = require('express');
const router = express.Router();
const externalModule = require("../logger/logger");
const helper = require("../util/helper");
const validator = require("../validator/formatter");
const loadash = require("../LodashEx/loadArr");



router.get('/test-me', function(req,res){
    console.log("After Calling Welcome function...");
    
    externalModule.welcome();

    res.send("My First Node JS Application");
})
router.get('/test-me1', function(req,res){
    
    helper.printDate();
    helper.printMonth()
    helper.getPersonalInfo();
    res.send( "My 2nd Node JS Application ");
})

router.get('/test-me2', function(req, res){
    validator.trim();
    validator.changeToLowerCase();
    validator.changeToUpperCase();
    res.send("My 3rd API");
})

router.get('/test-me3', function(req,res){
    loadash.chunkMethod();
    loadash.tailMethod();
    loadash.unionMethod();
    loadash.fromPairsMethod()

    res.send("My Fourth API ")
})
 module.exports = router;