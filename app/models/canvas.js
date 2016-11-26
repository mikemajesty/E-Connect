var mongoose = require('mongoose');

module.exports = mongoose.model('Canvas', {
    code: { type: String, default: ''},
    data: { type: Mixed, default: ''},
});