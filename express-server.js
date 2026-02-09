const express = require("express")
const cors = require("cors")
const { router: salesRouter } = require("./routers/sales.js")
const { router: usersRouter } = require("./routers/users.js")
const { simulateSalesAgent } = require("./middleware/index.js")
const { errorHandler } = require("./middleware/error.js")

const app = express()


app.use(cors({
    origin: "http://localhost:5500",
    optionsSuccessStatus: 200
}))

app.use(express.json())


app.use(simulateSalesAgent)

app.get("/", (req, res) => {
    res.send("Hello world from Ready 4IT")
})

app.use("/sales", salesRouter)
app.use("/users", usersRouter)


app.use(errorHandler)

app.listen(3000, (err) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("Server is running successfully on port 3000")
    }

})