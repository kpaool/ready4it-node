const mongoose = require("mongoose")

const saleSchema = new mongoose.Schema({
    produceName: {
        type: String,
        required: true
    },
    tonnage: {
        type: Number,
        required: true
    },
    amountPaid: {
        type: Number,
        required: true,
        min: 10000
    },
    buyerName: {
        type: String,
        required: true,
        minlength: 2
    },
    salesAgentName: {
        type: String,
        required: true,
        minlength: 2
    },
    branch: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Sale = mongoose.model("Sale", saleSchema)

module.exports = Sale
