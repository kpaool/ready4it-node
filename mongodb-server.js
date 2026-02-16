const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/kgl"
mongoose.connect(URI)
    .then(() => {
        console.log("Connect to mongo db")
    })
    .catch((err) => {
        console.log(err)
    })


let salesSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        min: 2000
    },
    customerName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
})

let SalesModel = mongoose.model("sales", salesSchema)

module.exports = { SalesModel }


