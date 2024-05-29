const { Schema } = require('mongoose')
const { BaseSchema } = require('../core')

const Review = new Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
}, { _id: false })

const Product = new BaseSchema({

        name: { type: String, required: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
        quantity: { type: Number, required: true },
        category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
        description: { type: String, required: true },
        reviews: [ Review ],
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        price: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },

    }
    , { timestamps: true })

module.exports = Product
