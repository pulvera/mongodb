const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email_address: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('user_information', UserSchema);
module.exports = User;