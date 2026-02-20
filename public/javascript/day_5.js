let i = 0;
do {
    console.log("Number: " + i);
    i++;
} while (i < 5);

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x] + " ";
}
console.log(text);
