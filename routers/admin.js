const express = require("express")
const router = express.Router()
const { KGLError } = require("../utils/custom-error.js")
const { SalesModel } = require("../mongodb-server.js")
const UsersModel = require("../models/users.js")

router.get("/", async (req, res) => {
    const [sales, users] = await Promise.all([
        SalesModel.find(),
        UsersModel.find()
    ])
    res.json({ sales, users })
})

module.exports = { router }