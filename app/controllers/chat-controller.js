var express = require('express');
var router = express.Router();

var apiai = require('apiai');
var apiaiApp = apiai("63fb4711e61f4bc4b4b990284b0b7df6");
 

router.post('/message', function (req, res) {
    var apiaiRequest = apiaiApp.textRequest(req.body.message, {sessionId: req.body.sessionId});

    apiaiRequest.on('response', function(response) {
        res.json(response);
    });

    apiaiRequest.on('error', function(error) {
        console.log(error);
    });

    apiaiRequest.end();
}); 

module.exports = router;