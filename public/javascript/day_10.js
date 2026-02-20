// sets and maps

let users = [
    "Zahra Sluman",
    "Florence",
    "Uwase",
    "Daniel",
    "Zahra"
]

const uniqueUsers = new Set(users);

uniqueUsers.add("Mark")

uniqueUsers.delete("Uwase")



// console.log(uniqueUsers)



let sales =  [
    {customer:"PAtricl",amountPaid:5000,branch:"Kampala"},
    {customer:"Daniel",amountPaid:15000,branch:"Masaka"},
    {customer:"Kitsa",amountPaid:45000,branch:"Gulu"},
    {customer:"Odongo",amountPaid:55000,branch:"Kampala"},
    {customer:"Lawrence",amountPaid:73000,branch:"Kampala"},
]

let branches = sales.map((sale)=> sale.branch)

let uniqueBranches = new Set(branches)


let locationToCheck = "Kampala"
let didKampalaMakeSales =  uniqueBranches.has(locationToCheck)

// console.log(`${didKampalaMakeSales? "Yes": "No"} is the answer to if ${locationToCheck} made sales`)


uniqueBranches.forEach((branchName,i)=>{
    // console.log(branchName)
})




/// Maps 


// let priceList = [
//     ["Beans",4500],
//     ["Peas",5000],
//     ["Matooke",10_000],
//     [23,"Abdalla"]
// ]


// const prices  = new Map(priceList)

// prices.set("Rice",5000)



// // console.log(prices)
// console.log(prices.get("Beans"))

// // console.log(prices.get(23))


// console.log(prices.has("Posho"))

