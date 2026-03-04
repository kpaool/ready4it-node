const CreditSale = require("../models/creditSale")
const Inventory = require("../models/inventory")

exports.recordCreditSale = async (req, res) => {
    try {
        const { buyerName, nationalId, location, contact, amountDue, salesAgentName, dueDate, produceName, type, tonnage, dateOfDispatch, branch } = req.body

        // 1. Check stock
        const inventory = await Inventory.findOne({ produceName, branch })
        if (!inventory || inventory.totalTonnage < tonnage) {
            return res.status(400).json({ message: "Insufficient stock", availableStock: inventory ? inventory.totalTonnage : 0 })
        }

        // 2. Reduce stock
        inventory.totalTonnage -= Number(tonnage)
        await inventory.save()

        // 3. Save Credit Sale Record
        const creditSale = new CreditSale({
            buyerName,
            nationalId,
            location,
            contact,
            amountDue,
            salesAgentName,
            dueDate,
            produceName,
            type,
            tonnage,
            dateOfDispatch
        })
        await creditSale.save()

        res.status(201).json({
            message: "Credit sale recorded successfully",
            creditSale,
            remainingStock: inventory.totalTonnage
        })
    } catch (error) {
        res.status(400).json({ message: "Error recording credit sale", error: error.message })
    }
}

exports.getAllCreditSales = async (req, res) => {
    try {
        const creditSales = await CreditSale.find()
        res.status(200).json(creditSales)
    } catch (error) {
        res.status(500).json({ message: "Error fetching credit sales", error: error.message })
    }
}
