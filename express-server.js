const express = require("express")
const cors = require("cors")
const { router: salesRouter } = require("./routers/sales.js")
const { simulateSalesAgent } = require("./middleware/index.js")
const { errorHandler } = require("./middleware/error.js")

const app = express()

app.use(express.json())

app.use(cors())

app.use(simulateSalesAgent)

app.get("/", (req, res) => {
    res.send("Hello world from Ready 4IT")
})

app.use("/sales", salesRouter)


app.use(errorHandler)

app.listen(3000, (err) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("Server is running successfully on port 3000")
    }

})