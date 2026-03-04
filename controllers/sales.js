const Sale = require("../models/sales")
const Inventory = require("../models/inventory")
const { KGLError } = require("../utils/custom-error.js")

const getAllSales = async (req, res, next) => {
    try {
        const sales = await Sale.find()
        res.status(200).json(sales)
    } catch (error) {
        next(new KGLError("Failed to get sales", 400))
    }
}

const getSaleById = async (req, res, next) => {
    try {
        const sale = await Sale.findById(req.params.id)
        if (!sale) {
            return res.status(404).json({ message: "Sale not found" })
        }
        res.status(200).json(sale)
    } catch (error) {
        next(new KGLError("Failed to find sale", 404))
    }
}

const createSale = async (req, res) => {
    try {
        const { produceName, tonnage, amountPaid, buyerName, salesAgentName, branch, time } = req.body

        // 1. Check stock availability
        const inventory = await Inventory.findOne({ produceName, branch })
        if (!inventory || inventory.totalTonnage < tonnage) {
            return res.status(400).json({
                message: "Insufficient stock or produce not found in this branch",
                availableStock: inventory ? inventory.totalTonnage : 0
            })
        }

        // 2. Reduce stock
        inventory.totalTonnage -= Number(tonnage)
        await inventory.save()

        // 3. Save Sale Record
        const sale = new Sale({
            produceName,
            tonnage,
            amountPaid,
            buyerName,
            salesAgentName,
            branch,
            time
        })
        await sale.save()

        // 4. Notify if out of stock
        let status = "Sale recorded successfully"
        if (inventory.totalTonnage === 0) {
            status += ". ALERT: Produce is now out of stock!"
        }

        res.status(201).json({
            message: status,
            sale,
            remainingStock: inventory.totalTonnage
        })
    } catch (error) {
        res.status(400).json({ message: "Failed to save sale", error: error.message })
    }
}

const updateSale = async (req, res) => {
    try {
        const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!updatedSale) {
            return res.status(404).json({ message: "Sale not found" })
        }
        res.status(200).json({ message: "Update successful", body: updatedSale })
    } catch (error) {
        res.status(400).json({ message: "Failed to update sale", error: error.message })
    }
}

const deleteSale = async (req, res) => {
    try {
        const result = await Sale.findByIdAndDelete(req.params.salesId || req.params.id)
        if (!result) {
            return res.status(404).json({ message: "Sale not found" })
        }
        res.status(200).json({ message: "Sale deleted successfully", body: result })
    } catch (error) {
        res.status(400).json({ message: "Failed to delete sale", error: error.message })
    }
}

module.exports = {
    getAllSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
}