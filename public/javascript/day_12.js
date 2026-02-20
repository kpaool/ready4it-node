

let input=5000000

if(input=== undefined){
    console.error("The user didn't provide us with any input")
}

if(input===0){
    console.warn("The user has provided an input of zero")
}

if(input >10000){
    console.info("The user has provided a very large number")
}


const calculation = 500/input

// console.log(calculation)

let sales = [
    {amountDue:56000,purchaseDate: new Date("2026-01-06"),isCreditSale:true,id:234},
    {id:235,amountDue:16000,purchaseDate: new Date("2026-01-07"),isCreditSale:true},
    {id:237,amountDue:8000,purchaseDate: new Date("2026-01-09"),isCreditSale:false},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:16000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:446000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:416000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:56000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:56000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:6000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:456000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:76000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
    {id:238,amountDue:156000,purchaseDate: new Date("2026-01-04"),isCreditSale:true},
]

// console.log(sales)
// console.table(sales,["amountDue","purchaseDate"])


let ages = [21,23,55,1,54,9,43,23]

// console.table(ages)


// console.table(sales[0])

let transaction = {
    id:23,
    amount:5000,
    date : new Date(),
    paymentMethod: {
        paymentTarget : "MOMO",
        paymentNumber : 256721234234,
        paymentStatus : "pending"
    }
}



let arrayOfNumber =[]

for(let i=0;i<10000;i++){
    arrayOfNumber.push(i+1)
}

console.time("timeToAnswer")
arrayOfNumber.reduce((curr,number)=>curr+number ,0)
console.timeEnd("timeToAnswer")


console.time("loopMethod")
let sum =0
for(let i=0;i<arrayOfNumber.length;i++){
    sum += arrayOfNumber[i]
}
console.timeEnd("loopMethod")