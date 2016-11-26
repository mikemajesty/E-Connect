module.exports = function (app) {
    app.use('/api/webhook', require('./controllers/webhook-controller'));
    app.use('/api/chat', require('./controllers/chat-controller'));

    app.use('/canvas', require('./controllers/canvas-controller'));

    // api ---------------------------------------------------------------------
    // get all todos

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
