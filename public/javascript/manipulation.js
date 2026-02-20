

let header = document.getElementById("header")

let header1 = document.querySelector("#header")

let paragraphs = document.getElementsByClassName("paragraph")

// console.log(header)
// console.log(header1)

for (let i = 0; i < paragraphs.length; i++) {
    let _element = paragraphs.item(i)
    _element.innerHTML = `
    <b>This is the paragraph number ${i + 1}</b>
    <ul>
        <li>Hello</li>
        <li>World</li>
    </ul>
    
    `
}

let input = document.querySelector("input")

// console.log(input.value)


input.value = "This our new value"



let submitBtn = document.querySelector("#submitBtn")

let isDisabled = submitBtn.getAttribute("disabled")

submitBtn.removeAttribute("disabled")