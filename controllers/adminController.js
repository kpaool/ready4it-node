const Sale = require("../models/sales")
const CreditSale = require("../models/creditSale")

exports.getGeneralAggregatedSales = async (req, res) => {
    try {
        const totalCashSales = await Sale.aggregate([
            { $group: { _id: null, totalAmount: { $sum: "$amountPaid" }, totalTonnage: { $sum: "$tonnage" } } }
        ])

        const totalCreditSales = await CreditSale.aggregate([
            { $group: { _id: null, totalAmountDue: { $sum: "$amountDue" }, totalTonnage: { $sum: "$tonnage" } } }
        ])

        res.status(200).json({
            summary: "KGL Aggregated Sales Report",
            cashSales: totalCashSales[0] || { totalAmount: 0, totalTonnage: 0 },
            creditSales: totalCreditSales[0] || { totalAmountDue: 0, totalTonnage: 0 },
            combinedTonnage: (totalCashSales[0]?.totalTonnage || 0) + (totalCreditSales[0]?.totalTonnage || 0)
        })
    } catch (error) {
        res.status(500).json({ message: "Error generating report", error: error.message })
    }
}
