

let firstName = " DANIEL "
let lastName = ' akilimali'



let capitalisedName = `${firstName[0].toLocaleUpperCase("en-GB")}${firstName.slice(1)}`

// console.log(capitalisedName)

let initials = `${firstName[0]}.${lastName[0]}`
// console.log(initials)
let trimmedFirstName = firstName.trim()
let trimmedLastName = lastName.trim()

let trimmedInitials = trimmedFirstName[0] + trimmedLastName[0]
// console.log(trimmedInitials)




let userName = "Aksanti Mulume"
let splitUserName = userName.split(" ")
console.log(splitUserName[0])
console.log(splitUserName[1])


// ===== //

let anthem = "Oh Uganda"
console.log(anthem)
console.log(anthem.replace("Uganda","Kenya"))