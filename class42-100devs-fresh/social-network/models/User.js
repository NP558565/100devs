const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema)