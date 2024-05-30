const { User } = require("./schemas/User")
const { Product } = require("./schemas/Product")
const { Order } = require("./schemas/Order")
const { Category } = require("./schemas/Category")
const { Queue } = require("./schemas/Queue");

module.exports = {
    Category,
    Order,
    Product,
    User,
    Queue
}

