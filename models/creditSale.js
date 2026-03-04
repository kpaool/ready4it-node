const mongoose = require("mongoose")

const creditSaleSchema = new mongoose.Schema({
    buyerName: {
        type: String,
        required: true,
        minlength: 2
    },
    nationalId: {
        type: String,
        required: true
        // Add NIN validation regex if known
    },
    location: {
        type: String,
        required: true,
        minlength: 2
    },
    contact: {
        type: String,
        required: true
    },
    amountDue: {
        type: Number,
        required: true,
        min: 10000
    },
    salesAgentName: {
        type: String,
        required: true,
        minlength: 2
    },
    dueDate: {
        type: Date,
        required: true
    },
    produceName: {
        type: String,
        required: true,
        minlength: 2
    },
    type: {
        type: String,
        required: true
    },
    tonnage: {
        type: Number,
        required: true
    },
    dateOfDispatch: {
        type: Date,
        required: true
    }
}, { timestamps: true })

const CreditSale = mongoose.model("CreditSale", creditSaleSchema)

module.exports = CreditSale
