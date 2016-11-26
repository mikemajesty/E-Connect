var express = require('express');
var router = express.Router();
var canvas = require('../models/canvas');
var randomstring = require("randomstring");

router.post('/', function (req, res) {
    
    var code = randomstring.generate(7);

    res.json({
        "speech": "Legal",
        "displayText": "Legal",
        "source": "connect-api",
        "data": {
            "teste": "flow"
        }
    });
}); 

module.exports = router;