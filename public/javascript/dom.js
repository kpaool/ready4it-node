


let welcomeParagraph = document.getElementById("welcome")
let infoParagraph = document.getElementsByClassName("info-section")

let welcomeParagraph2 = document.querySelector("#welcome")


let theParagraph = document.querySelector("#parentDiv p.id")


let allParagraphs = document.querySelectorAll(".info-section")



// try {

//     for (let i = 0; i < infoParagraph.length; i++) {
//         console.log(infoParagraph.item(i).textContent)
//     }

//     console.log(welcomeParagraph.textContent, " with get element by id")
//     console.log(welcomeParagraph2.textContent, " with query Selector")

//     console.log(theParagraph.textContent, " with query selector")

// } catch (error) {
//     console.warn(error.message)
// }



let is2 = document.querySelector("#is2")


let parentNode = document.querySelector("#parentNode")

let children = parentNode.children



let colors = ["black", "yellow", "red"]

for (let i = 0; i < children.length; i++) {
    children[i].textContent = "Hello world"
    children[i].style.color = colors[i]
}

