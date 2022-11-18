const mongoose = require('mongoose');
const {Schema} = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: Integer,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    age:{
        type: Integer,
        required: true
    },
    date: {
        type: Date,
        default: Date.now 
    },
})

const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = Patient;