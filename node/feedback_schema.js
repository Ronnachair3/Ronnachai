var mongoose = require('mongoose');

var FeedbackSchema = mongoose.Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    subname: {type: String, require: true},
    age: {type: String, require: true},
    gender: {type: String, require: true},
    address: {type: String, require: true},
    province: {type: String, require: true},
    state: {type: String, require: true},
    zipcode: {type: String, require: true}
})

var FeedbackModel = mongoose.model('profiles', FeedbackSchema);
module.exports = FeedbackModel;
