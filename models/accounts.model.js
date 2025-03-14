const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    avatar: String,
    phone: Number,
    token: String,
    deleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const Account = mongoose.model('Account', AccountSchema, 'users');

module.exports = Account