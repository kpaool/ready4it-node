const mongoose = require("mongoose")

const procurementSchema = new mongoose.Schema({
    produceName: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        match: /^[A-Za-z]{2,}$/ // Alphabets only, at least 2 characters
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    tonnage: {
        type: Number,
        required: true,
        min: 100
    },
    cost: {
        type: Number,
        required: true,
        min: 10000
    },
    dealerName: {
        type: String,
        required: true,
        minlength: 2
    },
    branch: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Procurement = mongoose.model("Procurement", procurementSchema)

module.exports = Procurement
