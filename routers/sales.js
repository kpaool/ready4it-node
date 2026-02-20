const express = require("express")
const { KGLError } = require("../utils/custom-error.js")
const { SalesModel } = require("../mongodb-server.js")
const { getAllSales, getSaleById,
    createSale,
    updateSale,
    deleteSale } = require("../controllers/sales.js")

// create a sales router
const router = express.Router()

router.use((req, res, next) => {
    if (req.user && req.user.role && req.user.role.toLowerCase() !== "sales-agent") {
        next()
    } else {
        res.status(403).json({ message: "You need to be an admin to access this resources" })
    }
})

router.use((req, res, next) => {
    if (req.user && req.user.role && req.user.role.toLowerCase() === "viewonlyadmin") {
        if (req.method.toLowerCase() === "post" || req.method.toLowerCase() === "patch" || req.method.toLowerCase() === "delete") {
            res.status(403).json({ message: "You have read only rights" })
            return
        }
    }
    next()
})

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Get all sales
 *     description: Retrieve a list of all sales from the database
 *     tags:
 *       - Sales
 *     responses:
 *       200:
 *         description: A list of sales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The sale ID
 *                   name:
 *                     type: string
 *                     description: The sale name
 *                   email:
 *                     type: string
 *                     description: The sale email
 *                   password:
 *                     type: string
 *                     description: The sale password
 */
router.get("/", getAllSales)

/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     summary: Get a single sale by ID
 *     description: Retrieve a single sale from the database by their ID
 *     tags:
 *       - Sales
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the sale to retrieve
 *     responses:
 *       200:
 *         description: A single sale
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The sale ID
 *                 name:
 *                   type: string
 *                   description: The sale name
 *                 email:
 *                   type: string
 *                   description: The sale email
 *                 password:
 *                   type: string
 *                   description: The sale password
 */
router.get("/:id", getSaleById)

/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Create a new sale
 *     description: Create a new sale in the database
 *     tags:
 *       - Sales
 *     parameters:
 *       - in: body
 *         name: sale
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The sale name
 *             email:
 *               type: string
 *               description: The sale email
 *             password:
 *               type: string
 *               description: The sale password
 *     responses:
 *       201:
 *         description: A single sale
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The sale ID
 *                 name:
 *                   type: string
 *                   description: The sale name
 *                 email:
 *                   type: string
 *                   description: The sale email
 *                 password:
 *                   type: string
 *                   description: The sale password
 */
router.post("/", createSale)

/**
 * @swagger
 * /sales/{id}:
 *   patch:
 *     summary: Update a single sale by ID
 *     description: Update a single sale in the database by their ID
 *     tags:
 *       - Sales
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the sale to update
 *     responses:
 *       200:
 *         description: A single sale
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The sale ID
 *                 name:
 *                   type: string
 *                   description: The sale name
 *                 email:
 *                   type: string
 *                   description: The sale email
 *                 password:
 *                   type: string
 *                   description: The sale password
 */
router.patch("/:id", updateSale)

/**
 * @swagger
 * /sales/{id}:
 *   delete:
 *     summary: Delete a single sale by ID
 *     description: Delete a single sale from the database by their ID
 *     tags:
 *       - Sales
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the sale to delete
 *     responses:
 *       200:
 *         description: A single sale
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The sale ID
 *                 name:
 *                   type: string
 *                   description: The sale name
 *                 email:
 *                   type: string
 *                   description: The sale email
 *                 password:
 *                   type: string
 *                   description: The sale password
 */
router.delete("/:salesId", deleteSale)


//we export the router for us
module.exports = { router }