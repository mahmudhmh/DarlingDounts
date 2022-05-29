//new file by joooooo


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: String,
    email: String,
    passwotd: String,
});

module.exports =  mongoose.model('user', UserSchema);