const express = require("express")
const { Sale } = require("./Sale.js")

const sale = new Sale()
const app = express()

app.use(express.json())


const simulateSalesAgent = (req, res, next) => {
    req.user = {
        role: "agent",
        username: "Ali"
    }

    next()
}

app.use(simulateSalesAgent)


const userDetailsMiddleware = (req, res, next) => {
    const userDetailsStrng = req.get("user-details")
    if (!userDetailsStrng) {
        res.status(403)
        res.json({ message: "There is no user information found" })
    }
    const userDetails = JSON.parse(userDetailsStrng)



    if (userDetails.role && userDetails.role.toLowerCase() === "admin") {
        req.user = userDetails
        next()
    } else {
        res.status(403)
        res.json({ message: "You are not authorized to access this resource" })
    }

}


const isDirectorOrManager = (req, res, next) => {
    if (req.user && req.user.role && (req.user.role == "manager" || req.user.role == "director")) {
        next()
    } else {
        res.status(403)
        res.json({ message: "You are not authorized to access this resource" })
    }
}


app.get("/", (req, res) => {
    res.send("Hello world from Ready 4IT")
})

app.get("/sales", isDirectorOrManager, (req, res) => {

    res.json(sale.getAllSales())
})

app.get("/sales/:id", (req, res) => {
    let id = req.params.id
    let _sale = sale.getSalesById(id)
    if (_sale) {
        res.json(_sale)
        res.status(200)
    } else {
        res.json({ message: "Sale not found" })
        res.status(404)
    }

})

app.post("/sales", async (req, res) => {
    let body = req.body
    let saveState = await sale.add(body)
    if (saveState == true) {
        res.json({ message: "Sale saved successfully" })
        res.status(201)
    } else {
        res.json({ message: "Failed to save new sale" })
        res.status(400)
    }
})


app.listen(3000, (err) => {
    if (err) {
        console.log("Error")
    } else {
        console.log("Server is running successfully on port 3000")
    }

})