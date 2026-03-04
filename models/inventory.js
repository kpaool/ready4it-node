const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    produceName: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    totalTonnage: {
        type: Number,
        default: 0
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Inventory = mongoose.model("Inventory", inventorySchema)

module.exports = Inventory
