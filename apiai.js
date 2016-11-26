var apiai = require('apiai');
 
var app = apiai("63fb4711e61f4bc4b4b990284b0b7df6");
 
var request = app.textRequest('Quero abrir uma empresa', {
    sessionId: '11234'
});
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();
