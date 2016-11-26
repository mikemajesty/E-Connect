var express = require('express');
var router = express.Router();
var Canvas = require('../models/canvas');
var randomstring = require("randomstring");

router.post('/', function (req, res) {
    
    if (req.body.results.action === 'canvas') {
        
        // Canvas.create({
        //     code: code,
        //     data: {
        //         key_partners: 'key_partners' + code,
        //         key_activities: 'key_activities' + code,
        //         key_resources: 'key_resources' + code,
        //         cost_structure: 'cost_structure' + code,
        //         value_propositions: 'value_propositions' + code,
        //         customer_relationships: 'customer_relationships' + code,
        //         channels: 'channels',
        //         customer_segments: 'customer_segments' + code,
        //         revenue_streams: 'revenue_streams' + code
        //     }
        // });

        var code = randomstring.generate(7);
        Canvas.create({
            code: code,
            data: req.body.results.parameters
        });

        res.json({
            "speech": "Montamos um modelo de negócio para você, olhe aqui.",
            "displayText": "Montamos um modelo de negócio para você, olhe aqui.",
            "source": "connect-api",
            "data": {
                url: 'https://uol-econnect.herokuapp.com/canvas/' + code
            }
        });
    }

    res.json({
        "speech": "Não temos resposta para esta solicitação ainda, mas estamos trabalhando nisso.",
        "displayText": "Não temos resposta para esta solicitação ainda, mas estamos trabalhando nisso.",
        "source": "connect-api",
    });
}); 

module.exports = router;