// loops 

//for loop

// let sum = 0

// for (let num=1 ; num<=10 ; num++){
//     console.log(`Step ${num}: The sum is ${sum} + ${num} = ${sum + num} `)
//     sum = sum + num
// }

// console.log(sum)


// let firstName = "Victoire"

// console.log(`Length of ${firstName} is ${firstName.length}`)

// for (let index = 0; index < firstName.length; index++) {

//     console.log(firstName[index])
//     console.log(`Curent ${index}`)
// }




let sum = 0

let step = 1

while (step <= 10) {
    sum += step // sum = sum + step 
    step++
}

// console.log(sum)






// let isLoggedIn = false

// while (!isLoggedIn){
//     console.log("Provide your credentials")

//     {
//         // you check for correct password
//         isLoggedIn = true
//     }
// }




// while (true) {
//     console.log("This is an infinity loop")
// }


// let counter = 0

// let repeatSong = true

// do {

//    console.log(counter)
//    counter++
// } while (repeatSong)


// let emails = ["Abdalla@student.refactory.academy", "Victoire@student.refactory.academy", "Uwase@student.refactory.academy", "Kitsa@student.refactory.academy", "Paul@student.refactory.academy"]


// for (const email of emails){
//     // your logic for sending emails
//     console.log(`Email has been successfully sent to ${email}`)
// }


// let kglProduce = ["Mango", "Orange", "Banana", "Apple", "Grape", "Bean"]


// for (const produce of kglProduce){
//     console.log(produce)
//     if(produce=="Apple"){
//         break
//     }
// }



// let counter =0

// while (true) {
//     console.log("Infinity loop")
//     counter++

//     if (counter>5){
//         break
//     }

// }


let people = [
    "doctor",
    "lawyer",
    "general",
    "teacher",
    "engineer",
    "general",
    "programmer"
]


for (const person of people) {
    if(person==="general"){
        continue
    }
    console.log(person)
}