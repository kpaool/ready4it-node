const express = require("express")
const router = express.Router()
const { KGLError } = require("../utils/custom-error.js")
const { SalesModel } = require("../mongodb-server.js")
const UsersModel = require("../models/users.js")
const { getGeneralAggregatedSales } = require("../controllers/adminController")

// Middleware to ensure role is Director
const isDirector = (req, res, next) => {
    if (req.user && req.user.role && req.user.role.toLowerCase() === "director") {
        next()
    } else {
        res.status(403).json({ message: "Access denied. Only the Director Mr. Orban can view these reports." })
    }
}

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Get all sales and users
 *     responses:
 *       200:
 *         description: A list of sales and users
 */
router.get("/", async (req, res) => {
    const [sales, users] = await Promise.all([
        SalesModel.find(),
        UsersModel.find()
    ])
    res.json({ sales, users })
})

module.exports = { router }