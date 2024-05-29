const { Schema, model } = require('mongoose')

const CategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true,
    }

}, {
    timestamps: true
})

exports.Category = model('Category', CategorySchema)
