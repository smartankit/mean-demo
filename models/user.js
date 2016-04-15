
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
});

// Return model
module.exports = restful.model('Users', userSchema);
