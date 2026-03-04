const Procurement = require("../models/procurement")
const Inventory = require("../models/inventory")

exports.recordProcurement = async (req, res) => {
    try {
        const { produceName, type, date, time, tonnage, cost, dealerName, branch, contact, sellingPrice } = req.body

        // 1. Save Procurement Record
        const procurement = new Procurement({
            produceName,
            type,
            date,
            time,
            tonnage,
            cost,
            dealerName,
            branch,
            contact,
            sellingPrice
        })
        await procurement.save()

        // 2. Update Inventory
        let inventory = await Inventory.findOne({ produceName, branch })
        if (inventory) {
            inventory.totalTonnage += Number(tonnage)
            inventory.sellingPrice = sellingPrice // Manager determines the latest selling price
            await inventory.save()
        } else {
            inventory = new Inventory({
                produceName,
                type,
                totalTonnage: tonnage,
                sellingPrice,
                branch
            })
            await inventory.save()
        }

        res.status(201).json({
            message: "Procurement recorded successfully and inventory updated",
            procurement,
            currentStock: inventory.totalTonnage
        })
    } catch (error) {
        res.status(400).json({ message: "Error recording procurement", error: error.message })
    }
}

exports.getAllProcurements = async (req, res) => {
    try {
        const procurements = await Procurement.find()
        res.status(200).json(procurements)
    } catch (error) {
        res.status(500).json({ message: "Error fetching procurements", error: error.message })
    }
}
