var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Canvas', {
    code: { type: String, default: ''},
    data: { type: Schema.Types.Mixed },
});