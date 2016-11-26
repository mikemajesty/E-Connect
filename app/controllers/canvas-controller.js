var express = require('express');
var app = express();
var router = express.Router();

router.get('/:code', function (req, res) {
    res.render('canvas/index', {
        key_partners: 'key_partners',
        key_activities: 'key_activities',
        key_resources: 'key_resources',
        cost_structure: 'cost_structure',
        value_propositions: 'value_propositions',
        customer_relationships: 'customer_relationships',
        channels: 'channels',
        customer_segments: 'customer_segments',
        revenue_streams: 'revenue_streams'
    });
}); 

module.exports = router;