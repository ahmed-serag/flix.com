var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MovieSchema   = new Schema({
    name: String,
    link: String
});

module.exports = mongoose.model('Movie', MovieSchema);
