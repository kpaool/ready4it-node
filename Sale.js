const fs = require("fs/promises")


class Sale {

    constructor(path = "sales.json") {
        this.path = path
        this.sales = []

        fs.readFile(this.path)
            .then((data, err) => {
                if (err) {
                    console.log(err)
                } else {
                    this.sales = JSON.parse(data)
                }
            })
    }

    getAllSales() {
        return this.sales
    }

    getSalesById(id) {
        return this.sales.find(sale => sale.id == id)
    }

    async add(sale) {
        this.sales.push(sale)
        return await this.save()
    }

    async save() {
        let isSaveSuccessful
        await fs.writeFile(this.path, JSON.stringify(this.sales))
            .then(err => {
                if (err) {
                    isSaveSuccessful = false
                } else {
                    isSaveSuccessful = true
                }
            })
        return isSaveSuccessful
    }


}



module.exports = { Sale }