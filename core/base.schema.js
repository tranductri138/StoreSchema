/**
 * @typedef {import('mongoose').SchemaDefinition} SchemaDefinition
 * @typedef {import('mongoose').SchemaOptions} SchemaOptions
 */
const { Schema } = require('mongoose')

class BaseSchema extends Schema {
    /**
     * @param {SchemaDefinition?} obj
     * @param {SchemaOptions?} options
     */
    constructor(obj, options) {
        const $obj = {
            ...obj,
            store: {
                type: Schema.Types.String,
                index: true,
            }
        }
        super($obj, options)
    }
}

module.exports = { BaseSchema }
