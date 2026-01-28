class Sale {

    constructor(amount, quantity, item, date, currency) {
        this.amount = amount;
        this.item = item;
        this.quantity = quantity
        this.date = date;
        this.currency = currency;
    }

    getTotal() {
        return this.amount;
    }

    getUnitCost() {
        if (this.quantity == 0) return 0
        return this.amount / this.quantity;
    }
}


class CreditSale extends Sale{
    constructor(amount, quantity, item, date, currency,dueDate){
        super(amount, quantity, item, date, currency)
        this.dueDate = dueDate
    }

    getAmountDue(){
        return 0
    }
}


module.exports = {Sale,CreditSale}