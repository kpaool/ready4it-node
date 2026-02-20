// objects


let product = {
    "name" : "Milk",
    "weight":50,
    "price":2500,
    "purchasedBy" : "Kitsa",
    "purchasedDate" : new Date("2025-12-10"),
    "isAvailable" : true,
}

// console.log(product.purchasedDate)
// console.log(product.currency)

// console.log(product["price"])
// console.log(product["deleted by"])

let deletedBy = "deleted by"

// console.log(product[deletedBy])




product.currency = "USD"
product["currency"] = "KES"


// product["deletedDate"] = new Date("2025-10-10")



for(const keysOfProduct in product){
    // console.log(key)
    // console.log(product[keysOfProduct])
}

// console.log(Object.keys(product))

// console.log(Object.values(product))

// console.log(Object.entries(product))


let salesRecord = {
    produceName : "Beans",
    tonnageInKGs: 10,
    amountPaid : 50_000,
    buyersName : "Paul K"
}

salesRecord.isCreditSale = true
salesRecord.dueDate = new Date("2026-1-10")

console.log(salesRecord)

Object.keys(salesRecord).forEach((key)=>{
    
    switch(key){
        case "produceName":
            console.log("Produce Name: " + salesRecord[key] + `and the data type is ${typeof salesRecord[key]=="string" ? "correct" : "false"}`)
            break;
        case "tonnageInKGs":
            console.log("Tonnage In Kgs: " + salesRecord[key] + `and the data type is ${typeof salesRecord[key]=="number" ? "correct" : "false"}`)
            break;
        case "amountPaid":
            console.log("Amount Paid: " + salesRecord[key] + `and the data type is ${typeof salesRecord[key]=="number" ? "correct" : "false"}`)
            break;
        case "buyersName":
            console.log("Buyers Name: " + salesRecord[key] + `and the data type is ${typeof salesRecord[key]=="string" ? "correct" : "false"}`)
            break;
        case "isCreditSale":
            console.log("Is Credit Sale: " + salesRecord[key] + `and the data type is ${typeof salesRecord[key]=="boolean" ? "correct" : "false"}`)
            break;
        case "dueDate":
            console.log("Due Date: " + salesRecord[key] + `and the data type is ${typeof salesRecord[key]=="object" ? "correct" : "false"}`)
            break;
    }

})