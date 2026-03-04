const express = require("express")
const { getAllSales, getSaleById, createSale, updateSale, deleteSale } = require("../controllers/sales.js")
const { recordCreditSale, getAllCreditSales } = require("../controllers/creditSalesController")
const { isDirectorOrManager } = require("../middleware/index")

const router = express.Router()

// RBAC: Managers and Sales Agents can record sales. 
// However, Managers can also record sales (business rule: "The manager can record a sale of the produce")
// Agents are NOT allowed to record produce entry (handled in procurement router)

/**
 * @swagger
 * components:
 *   schemas:
 *     Sale:
 *       type: object
 *       required: [produceName, tonnage, amountPaid, buyerName, salesAgentName, branch, time]
 *       properties:
 *         produceName: { type: string }
 *         tonnage: { type: number }
 *         amountPaid: { type: number }
 *         buyerName: { type: string }
 *         salesAgentName: { type: string }
 *         branch: { type: string }
 *         time: { type: string }
 */

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Get all sales
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: List of sales
 */
router.get("/", getAllSales)

/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Record a cash sale
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sale'
 *     responses:
 *       201:
 *         description: Sale recorded
 *       400:
 *         description: Insufficient stock
 */
router.post("/", createSale)

/**
 * @swagger
 * /sales/credit:
 *   post:
 *     summary: Record a credit sale
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [buyerName, nationalId, location, contact, amountDue, salesAgentName, dueDate, produceName, type, tonnage, dateOfDispatch, branch]
 *     responses:
 *       201:
 *         description: Credit sale recorded
 */
router.post("/credit", recordCreditSale)

router.get("/credit", getAllCreditSales)

router.get("/:id", getSaleById)
router.patch("/:id", isDirectorOrManager, updateSale)
router.delete("/:salesId", isDirectorOrManager, deleteSale)

module.exports = { router }