var express = require('express');
var router = express.Router();
var Canvas = require('../models/canvas');
var randomstring = require("randomstring");

router.post('/', function (req, res) {
    
    var code = randomstring.generate(7);
    Canvas.create({
        code: code,
        data: {
            key_partners: 'key_partners' + code,
            key_activities: 'key_activities' + code,
            key_resources: 'key_resources' + code,
            cost_structure: 'cost_structure' + code,
            value_propositions: 'value_propositions' + code,
            customer_relationships: 'customer_relationships' + code,
            channels: 'channels',
            customer_segments: 'customer_segments' + code,
            revenue_streams: 'revenue_streams' + code
        }
    });

    res.json({
        "speech": "Montamos um modelo de negócio para você, olhe aqui.",
        "displayText": "Montamos um modelo de negócio para você, olhe aqui.",
        "source": "connect-api",
        "data": {
            url: 'https://uol-econnect.herokuapp.com/canvas/' + code
        }
    });
}); 

module.exports = router;