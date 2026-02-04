const mongoose = require("mongoose")


const URI = "mongodb://localhost:27017/kgl"


mongoose.connect(URI)
    .then(() => {
        console.log("Connect to mongo db")
    })
    .catch((err) => {
        console.log(err)
    })

const mongodb = mongoose.connection

modules.exports = mongodb

mongodb.on("open", () => {
    console.log("now the database is open")
    const salesCollection = mongodb.db.collection("sales")
    salesCollection.find({})
        .toArray()
        .then((sales) => {
            console.log(sales)
        })
        .catch(err => {
            console.log(err)
        })
})