const { Schema } = require('mongoose')

const Category = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
    }

} , {
    timestamps : true
})

module.exports = Category
