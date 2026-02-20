const { KGLError } = require("../utils/custom-error.js")
const { SalesModel } = require("../mongodb-server.js")


const getAllSales = async (req, res, next) => {

    try {
        let sales = await SalesModel.find()
        res.json(sales)
        res.status(200)
    } catch (error) {
        next(new KGLError("Failed to get sales", 400))
    }

}

const getSaleById = async (req, res, next) => {
    let id = req.params.id

    if (id.length < 5) {
        next(new KGLError("Invalid ID signature", 400))
    }

    try {
        let sale = await SalesModel.find({ _id: id })
        if (!sale) {
            res.json({ message: "Sale not found" })
            res.status(404)
        }
        res.json(sale)
        res.status(200)
    } catch (error) {
        next(new KGLError("Failed to find sale", 404))
    }
}

const createSale = async (req, res) => {
    let body = req.body

    try {
        let sales = new SalesModel(body)

        sales.save()
            .then(() => {
                res.json({ message: "Sale saved successfully", body })
                res.status(201)
            })
            .catch((err) => {
                console.log(err)
                res.json({ message: "Failed to save sale", error: err, body })
                res.status(400)
            })
    } catch (error) {
        res.json({ message: "Failed to save sale", error, body })
        res.status(400)
    }

}

const updateSale = async (req, res) => {

    try {
        const id = req.params.id
        const body = req.body
        let updateSale = await SalesModel.findByIdAndUpdate(id, body, { new: true, runValidators: true })

        if (updateSale) {
            res.json({ message: "Update successful", body: updateSale })
            res.status(200)
        } else {
            res.status(400)
            res.json({ message: "Failed to update sale" })

        }

    } catch (e) {
        res.json({ message: "Failed to update sale", error: e })
        res.status(400)
    }

}

const deleteSale = async (req, res) => {
    try {
        const id = req.params.salesId

        let result = await SalesModel.findByIdAndDelete(id)

        if (result) {
            res.json({ message: "Sale deleted successfully", body: result })
            res.status(200)
        } else {
            res.json({ message: "Failed to delete sale" })
            res.status(400)
        }

    } catch (e) {
        res.json({ message: "Failed to delete sale", error: e })
        res.status(400)
    }
}

module.exports = {
    getAllSales,
    getSaleById,
    createSale,
    updateSale,
    deleteSale
}