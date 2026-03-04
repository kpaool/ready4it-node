const express = require("express")
const router = express.Router()
const { recordProcurement, getAllProcurements } = require("../controllers/procurementController")
const { isDirectorOrManager } = require("../middleware/index")

// Only Managers and Directors can record procurement
/**
 * @swagger
 * /procurement:
 *   post:
 *     summary: Record new produce procurement
 *     tags: [Procurement]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [produceName, type, date, time, tonnage, cost, dealerName, branch, contact, sellingPrice]
 *             properties:
 *               produceName: { type: string }
 *               type: { type: string }
 *               date: { type: string, format: date }
 *               time: { type: string }
 *               tonnage: { type: number }
 *               cost: { type: number }
 *               dealerName: { type: string }
 *               branch: { type: string }
 *               contact: { type: string }
 *               sellingPrice: { type: number }
 *     responses:
 *       201:
 *         description: Procurement recorded
 *       403:
 *         description: Unauthorized
 */
router.post("/", isDirectorOrManager, recordProcurement)

/**
 * @swagger
 * /procurement:
 *   get:
 *     summary: Get all procurements
 *     tags: [Procurement]
 *     responses:
 *       200:
 *         description: List of procurements
 */
router.get("/", isDirectorOrManager, getAllProcurements)

module.exports = { router }
