// functions

function returnSumOfTwoNumber(number1, number2) {
    let sum = number1 + number2
    return sum
}


// console.log(returnSumOfTwoNumber(10.5,20.9))



function welcomingMessage() {
    console.log("Welcome to Karibu Groceries")
}

// welcomingMessage()



function calculateTax(amount, taxRate = 0.18) {
    let tax = amount * taxRate
    return tax
}

// console.log(calculateTax(5000,0.3))


let firstName = "Simon Droti"



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0




let sumArray = function (numbers) {
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index]
    }
    return sum
}





let isNameValid = (name) => name.length > 2



let names = ["Victoire", "Uwase", "Kitsa", "Abdalla", "Simon", "Omer", "Omer", "Kitsa"]

// console.log(names)
// let filteredName = names.filter((name) => name === "Kitsa")
// console.log(filteredName)


let age =25


if(true){
    let age = 30
    // console.log(age)
}



// arrow function

function showAge(){
    console.log(age)
}

let showAgeExpression =  function (){
    console.log(age)
}

let showAgeArrow = () =>  {
    console.log(age)
    return age
}


let showAgeArrow2 = () => age  // { return age }




let ages = [23,24,12,43,53,55,89,56,21,1,2,43,2,21,42,32]

let filteredAges = ages.filter((age)=> age<25)

console.log(ages)
console.log(filteredAges)




