//
console.log("This is the JSON file")
alert("Ensure that the supplier provides quantity more than 1000 tonnes")



let sale = {
    id: 1,
    title: "Maize",
    price: 5000,
    supplierDetails: {
        name: "Yahaya",
        phone: "08012345678",
        address: "Matugga stage"
    }
}
// console.log(sale)


// let saleString = JSON.stringify(sale)
// console.log(saleString)

// let ages = [22, 25, 28, 30, 35, 40, 45, 50]
// let agesString = JSON.stringify(ages)
// console.log(agesString)

// localStorage.setItem("sale", saleString)
// localStorage.setItem("ages", agesString)


// let storedSale = localStorage.getItem("sale")
// let saleObject = JSON.parse(storedSale)
// console.log(storedSale)
// console.log(saleObject)

let cart = [
    { productId: "232dsd", quantity: 4 },
    { productId: "gt4334", quantity: 20 },
    { productId: "fd23", quantity: 10 }
]

let cartString = JSON.stringify(cart)
localStorage.setItem("cart", cartString)

let cartStringNew = localStorage.getItem("cart")
let cartNew = JSON.parse(cartStringNew)



// let dealers = '["Yahaya","Marcel","Uwase"]'
// let dealersArray = JSON.parse(dealers)
// console.log(dealersArray)




let loadReport = new Promise((resolve, reject) => {
    // code to open a file
    // code to save a report

    // code that might a take a while

    let successfullyLoaded = true
    if (successfullyLoaded) {
        setTimeout(() => {
            resolve("Report loaded successfully")
        }, 5000)
    } else {
        setTimeout(() => {
            reject("Failed to load report")
        }, 5000)
    }


})



// fetch("https://fakestoreapi.com/products")
//     .then((res) => {

//         if (!res.ok) {
//             console.log("Failed to fetch results")
//             throw new Error("Failed to fetch results")
//         }

//         return res.json()
//     })
//     .then((responseJSON)=>{
//         console.log(responseJSON)
//     })

async function fetchProducts(url) {
    let response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch results")
    }

    let data = await response.json()
    console.log(data)
    return data
}


// this was to get data using the GET method for https requests
// fetchProducts("https://fakestoreapi.com/products")


let procumentRecord = {
    name: "Maize",
    quantity: 10000,
    supplier: "Yahaya",
    totalCost: 5000000,
    date: "2026-01-13"
}

let jsonString = JSON.stringify(procumentRecord)

async function postNewProduct(url) {

    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Content-size": 10032312
        },
        body: jsonString
    })

    if (!response.ok) {
        throw new Error("Failed to add new product")
    }

    let data = await response.json()
    console.log(data)
}

postNewProduct("https://fakestoreapi.com/products")

