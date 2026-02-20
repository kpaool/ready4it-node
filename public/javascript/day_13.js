
let isWithDrawAvailable = true

if (isWithDrawAvailable) {
    console.log("This is a syntax error")

}

// let username = 20

// username.toUpperCase()


let names = [
    "Kevin",
    "John",
    "Jane",
    "Ismail",
    "Zahra"
]

console.log(names.length)


console.log(names[8])

let sales = {
    id: 234,
    amountDue: 56000,
    purchaseDate: new Date("2026-01-06"),
    isCreditSale: true
}

// console.log(sales["paymentMethod"])


let isDatabaseOpen = false

function login(username, password) {
    isDatabaseOpen = true

    if (username.length < 6) {
        throw new Error("The length of the username should be greater than 6")
    }

    return username === password
}

function attempLogin() {
    let username = 20
    let password = ""


    username = username.toString()
    login(username, password)


    if (typeof username === "string") {
        if (true) {

            username.toUpperCase()
        }
    } else {
        console.log("Please enter a text value and not number")
    }
}


try {
    // attempLogin()
} catch (error) {
    console.log(error)
} finally {

}




function canSeeTotalRevenue(userRole) {

    let decision = userRole === "admin" || userRole === "manager"

    if (decision === false) {
        throw new Error("You are not authorized to see the total revenue")
    }
    return decision
}



function learningThrow(){
    throw new Error("This is an error for throw")
}

try {
    learningThrow()
} catch (exception) {
    console.log(exception.stack)
}



