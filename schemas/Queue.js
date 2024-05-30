const mongoose = require('mongoose')

const QueueSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

exports.Queue = mongoose.model('Queue', QueueSchema)