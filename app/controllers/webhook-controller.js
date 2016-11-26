var express = require('express');
var router = express.Router();
var Canvas = require('../models/canvas');
var randomstring = require("randomstring");

router.post('/', function (req, res) {
    
    if (req.body.result.action === 'canvas') {
        
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
            data: req.body.result.parameters
        });

        res.json({
            "speech": "Montamos um modelo de negócio para você, olhe aqui.",
            "displayText": "Montamos um modelo de negócio para você, olhe aqui.",
            "source": "connect-api",
            "data": {
                url: 'https://uol-econnect.herokuapp.com/canvas/' + code,
                messages: [
                    "O marketing também é muito importante, faça um site para divulgar o seu negócio! UOL oferece um amplo catálogo de produtos que podem te ajudar! Você pode criar seu site, sua loja online ou um e-mail profissional, pensa só, celso@sualoja.com.br, bacana né!?"
                ]
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