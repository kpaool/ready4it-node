
let date_1 = new Date()
let date_2 = new Date("2025-11-30")

let timestamp1 = date_1.getTime()  // we are getting the timestamp from now upto to the epoc time
let timestamp2 = date_2.getTime()  // we are getting the timestamp from 30 November 2025 upto the epoc

let difference = timestamp1 - timestamp2

let seconds = difference / 1000
let minutes = seconds / 60
let hours = minutes / 60
let days = hours / 24
let weeks = days / 7

// ------ //



let isLoggedIn = false


// if(!isLoggedIn){
//     // you write your code for the truthy outcome
//     console.log("You are not logged in, please login")
// }else{
//     // you write your code for the falsy outcome
//     console.log("Hello, you are already logged in")
// }


let roles = "Admin" || "Sales Agent" || "Accountant"
let userRole = "Admin"
let priviledges = "read" || "write" || "delete" || "update"

let adminPriviledge_1 = "read"
let adminPriviledge_2 = "write"
let adminPriviledge_3 = "update"
let message

// if (userRole === "Admin") {
//     if (adminPriviledge === "read" && adminPriviledge_2 === "write") {
//         if (adminPriviledge_1 === "update") {
//             // show the UI for read, write and update
//         } else {
//             // show the UI for read and write
//         }
//     }
// }


// console.log(message)

let _role = "Admin"
switch (_role) {
    case "Admin": message = "This user is an admin";
        break;
    case "Sales Agent": message = "This user is a sales agent";
        break;
    case "Accountant": message = "This user is an accountant";
        break;
    default: message = "This user is not registered";
        break;
}

// console.log(message)



/**
 * Ternary operator
 * 
 *  (logical operations) ? value for the truthy outcome  : value for the falsy outcome
 */


// let userNationality = "American"

// let currency = userNationality === "Ugandan" ? "UGX" : "USD"

// console.log(currency)




