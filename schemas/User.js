const { BaseSchema } = require('../core')

const User = new BaseSchema({
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
