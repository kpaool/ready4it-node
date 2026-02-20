let firstName1 = "Uwase"
let firstName2 = "uwase"

let comparison = (firstName1 != firstName2)
// console.log(comparison)

let age1 = 18
let age2 = "18"

// console.log(age1 !== age2)





let customerReceiptNumber = null
// customerReceiptNumber = 23
let isReturningCustomer = customerReceiptNumber !== null


let costOfRice = 3000
let costOfBeans = 3500
let customersMoney = 2000
let isUgandanShilling = true


let canPayForRice = customersMoney >= costOfRice || isReturningCustomer
// console.log(canPayForRice)

// let canPayForBeans = (customersMoney >= costOfBeans && isReturningCustomer) || isUgandanShilling;
// console.log(canPayForBeans);





// let schoolFeesPaid = 70000
// let schoolFeesDue = 60000

// let hasClearedDues = schoolFeesPaid <= schoolFeesDue




let isLoggedIn = false

// is not logged in check 
// console.log(!isLoggedIn)

// if(!isLoggedIn){
//     console.log("Please log in now, you are going to be redirected")
// }else{
//     console.log("You are logged in")
// }






// === ///
/**
 * Date object
 */

let number1=43

let string1 = "2weeks"


let date1 = "03/12/2025"
let date2 = "2025-01-03"
let date3 = "2025-01-03T12:00:00"


let date = new Date()


//timestamp from the EPOC time 1 January 1970
// console.log(date.getTime())




let purchasedDate = new Date("2025-11-15")
let currentDate = new Date()



let passedTime = currentDate.getTime()- purchasedDate.getTime()
console.log(passedTime)

let secondsPassed = passedTime/1000
console.log(`${secondsPassed} seconds have passed since the purchase`)

let minutesPassed = secondsPassed/60
console.log(`${minutesPassed} minutes have passed since the purchase`)

let hoursPassed = minutesPassed/60
console.log(`${hoursPassed} hours have passed since the purchase`)

let daysPassed = hoursPassed/24
console.log(`${daysPassed} days have passed since the purchase`)


let shouldCallCustomer =  daysPassed >= 10

if(shouldCallCustomer){
    console.log("Please call the customer")
}else{
    console.log("Do not call the customer")
}

