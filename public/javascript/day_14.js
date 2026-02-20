// classes and oop

class Car {

    color= "Red"
    engineSize = "2000cc"
    topSpeed = 250

}

// define an object
class Sale {
    id = 1
    amountDue = 56000
    purchaseDate
    isCreditSale = true

    constructor(id,amountDue,purchaseDate,isCreditSale){
        this.id = id
        this.amountDue=amountDue
        this.purchaseDate=purchaseDate
        this.isCreditSale=isCreditSale
    }

}

// initialise our objects
let sale1 = new Sale(1,4500,new Date("2026-01-06"),true)
let sale2 = new Sale(2,56000,new Date("2026-01-10"),false)


// console.log(sale1)
// console.log(sale2)


function mongoSaveData(collecttionName,nameOfProduct,tonnage,totalCost){
    console.log(`The product ${nameOfProduct} has been saved to the database`)
}


class ProcurementRecord {

    name
    tonnage
    totalCost
    unitCost

    constructor(name,tonnage,totalCost,purchaseDate){
        this.name = name
        this.tonnage = tonnage
        this.totalCost = totalCost
        this.purchaseDate = purchaseDate
    }

    calculateUnitCost(){
        if(this.tonnage===0){
            throw new Error("Tonnage cannot be zero")
        }
        this.unitCost = this.totalCost/this.tonnage
        return this.unitCost
    }


    /**
     * This method can be used to save the data into the database
     */
    save(){
        mongoSaveData("products",this.name,this.tonnage,this.totalCost)
    }



}

let product1 = new ProcurementRecord("Maize",5000,2000000,new Date("2026-01-06"))
let product2 = new ProcurementRecord("Wheat",5000,2000000,new Date("2026-01-06"))


try {
    console.log(product1.calculateUnitCost())
    console.log(product2.calculateUnitCost())

    // product1.save()
    // product2.save()

} catch (error) {
    console.log(error.message)
}





class KGLSale {
    constructor(produceName,tonnage,totalCost,saleDate,currency){
        this.produceName= produceName
        this.tonnage= tonnage
        this.totalCost= totalCost
        this.saleDate= saleDate
        this.currency= currency
    }

    getDetails(){
        return `The sale of ${this.produceName} was made on ${this.saleDate} and the total cost was ${this.totalCost}`
    }
}

class KGLCreditSale extends KGLSale {
    constructor(produceName,tonnage,totalCost,saleDate,currency,dueDate){

        super(produceName,tonnage,totalCost,saleDate,currency)

        this.isCreditSale = true
        this.dueDate = dueDate
    }

  

    calculateDueDateInDays(){
        let currentDate = new Date()
        let curentTimestamp = currentDate.getTime()
        let dueDateTimestamp = this.dueDate.getTime() 
        if(curentTimestamp>dueDateTimestamp){
            return {
                dueDays:0,
                message:"The sale is late, please make a payment",
                lateDays: Math.floor((curentTimestamp - dueDateTimestamp)/1000/60/60/24)
            }
        }
        let timeDifference = dueDateTimestamp - curentTimestamp

        let daysDue = timeDifference/1000/60/60/24
        return  {
                dueDays:daysDue,
                message:"Please organise to make a payment before the due date",
                lateDays: 0
            }
    }
}



let sale = new KGLSale("Maize",5000,2000000,new Date("2026-01-06"),"KES")
let creditSale = new KGLCreditSale("Wheat",500,1500000,new Date("2026-01-06"),"KES",new Date("2026-01-20"))
console.log(sale.getDetails())
console.log(creditSale.getDetails())

console.log(`The sale is due in ${creditSale.calculateDueDateInDays().dueDays} days | ${creditSale.calculateDueDateInDays().message}`)





