const { Schema } = require('mongoose')

const User = new Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: {
        timestamps: true,
    },
})

module.exports = User
