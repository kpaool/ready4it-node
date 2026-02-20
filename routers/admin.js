const express = require("express")
const router = express.Router()
const { KGLError } = require("../utils/custom-error.js")
const { SalesModel } = require("../mongodb-server.js")
const UsersModel = require("../models/users.js")

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