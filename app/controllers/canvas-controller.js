var express = require('express');
var app = express();
var router = express.Router();
var Canvas = require('../models/canvas');

router.get('/:code', function (req, res) {

        // Canvas.create({
        //     code: '123',
        //     data: {
        //         key_partners: 'key_partners',
        //         key_activities: 'key_activities',
        //         key_resources: 'key_resources',
        //         cost_structure: 'cost_structure',
        //         value_propositions: 'value_propositions',
        //         customer_relationships: 'customer_relationships',
        //         channels: 'channels',
        //         customer_segments: 'customer_segments',
        //         revenue_streams: 'revenue_streams'
        //     }
        // });

    Canvas.findOne({code: req.params.code}, function (err, canvas) {
        if (err) {
            res.send(err);
        }

        if (canvas === null) {
            return res.status(404).send();
        }

        res.render('canvas/index', {
            key_partners: canvas.data.key_partners,
            key_activities: canvas.data.key_activities,
            key_resources: canvas.data.key_resources,
            cost_structure: canvas.data.cost_structure,
            value_propositions: canvas.data.value_propositions,
            customer_relationships: canvas.data.customer_relationships,
            channels: canvas.data.channels,
            customer_segments: canvas.data.customer_segments,
            revenue_streams: canvas.data.revenue_streams
        });
    });
}); 

module.exports = router;