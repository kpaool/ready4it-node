

// destructing

let data = ["Maize",4500]

let users = ["Paul","Yahaya","Bola"]


// let item =  data[0]
// let price = data[1]



let [item,price] = data

let record = ["ID-102","Rice",4500,"out-of-stock"]

// let [id,,cost] = record

// console.log(id)
// console.log(cost)

let [id,,cost,status="active"] = record

// console.log(id)
// console.log(cost)
// console.log(status)


let records = [
    {id:23,item:"Rice",cost:4500,status:"out-of-stock"},
    {id:24,item:"Rice",cost:4500,status:"out-of-stock"},
    {id:25,item:"Rice",cost:4500,status:"out-of-stock"},
]

let [first,second,third] = records


let location = {
    name:"Kampala store",
    staff:5,
    isOpen:true,
    launchDate: new Date("2026-01-05"),
    metadata:{
        location:"Kampala",
        category:"Grocery"
    },
    numberofPOS:5
}


let {
    name,
    staff:numberOfStaff,
    launchDate,
    metadata,
    numberofPOS=3
    } = location

// console.log(name)
// console.log(numberOfStaff)
// console.log(launchDate)
// console.log(metadata)
// console.log(numberofPOS)
numberOfStaff = 10


let stock = ["Maize","Rice","Millet","Milk"]
let stock2 = ["Mango","Orange","Banana"]

let newStock = [...stock,...stock2]

// console.log(copy)

newStock[0] = "Yam"

// console.log(stock)
// console.log(newStock)



let matuggaSales = [
    {id:23,total:55000,purchasedDate:new Date("2026-01-05")},
    {id:24,total:85000,purchasedDate:new Date("2026-01-11")},
    {id:25,total:13000,purchasedDate:new Date("2026-01-15")},
]

let kampalaSales = [
    {id:27,total:89000,purchasedDate:new Date("2026-01-09")},
    {id:27,total:15000,purchasedDate:new Date("2026-01-19")},
    {id:28,total:33000,purchasedDate:new Date("2026-01-30")},
]


let sales = [...matuggaSales,...kampalaSales]





let firstSale = {
    ...sales[0],
    location:"Matugga",
    purchasedDate:new Date("2026-01-25")
}

console.log(firstSale)
