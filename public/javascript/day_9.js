
// higher order functions

//ordinary function
function greet() {
    return "Hello!"
}


// HOF 
function execute(action) {

    console.log(action())
}

// execute(greet)









let produce = ["Beans", "Maize", "Rice", "Tomato"]


produce.forEach((product, i) => {
    // console.log(`${product} is index number ${i}`)
})

















let emails = [
    "hana@student.refactory.academy",
    "odongo@student.refactory.academy",
    "ismail@student.refactory.academy",
    "audry@student.refactory.academy"
]

function sendMail(personalEmail, index) {
    // implement your for send emails

    console.log(`Email was successfully sent to ${personalEmail} | ${index}`)
}


emails.forEach((element, index) => {
    // sendMail(element,index)
})


let filteredEmails = emails.map((email, index) => {
    return email.toUpperCase()
})




let ages = [23, 12, 43, 23, 1, 4, 534, 23, 43, 12, 23, 54, 21]

let filteredAges = ages.filter((age) => age <= 25)



let sales = [
    { customerName: "Simon", isCreditSale: true, amount: 10_000_000 },
    { customerName: "Alain", isCreditSale: false, amount: 15_000 },
    { customerName: "Omer", isCreditSale: true, amount: 20_000 },
    { customerName: "Daniel", isCreditSale: false, amount: 55_000 },
]

let filteredSales = sales.filter((sale) => sale.amount > 15000 && sale.isCreditSale === true)

// console.log(filteredSales)


let donations = [
    { donor: "Paul", amount: 500 },
    { donor: "Kitsa", amount: 500 },
    { donor: "Ondogo", amount: 300 },
    { donor: "Uwase", amount: 1500 },
    { donor: "Zahra", amount: 700 },
]


let receivedDonations = donations.reduce((totalDonations, donor) => {
    return totalDonations + donor.amount
}, 5000)

console.log(`We have received ${receivedDonations} USD to our target of 50,000 USD`)