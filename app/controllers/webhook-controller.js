var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log(req.body);
    res.json({
        "speech": "Legal",
        "displayText": "Legal",
        "source": "connect-api",
        "extraData": {
            "teste": "flow"
        }
    });
}); 

module.exports = router;