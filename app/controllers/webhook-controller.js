var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    res.status(200);
    res.send();
}); 

module.exports = router;