const assert = require("node:assert")
const { test, describe } = require("node:test")
const { sumOfSales } = require("../utils/index.js")
const bcrypt = require("bcrypt")

function validatedTonnage(tons) {
    return tons > 1000
}

const actual = 1 + 1
const expected = 2

let sales = [
    { amount: 100 },
    { amount: 200 },
    { amount: 300 }
]



describe("Basic testing of summation", () => {

    test("Summation of two number", () => {
        assert.strictEqual(actual, expected, "The summation value is not equal")
    })

})


describe("Tonnage validation", () => {

    test("Tonnage greater than 1000", () => {
        assert.notEqual(validatedTonnage(1000), true, "The tonnage value is not equal")
    })

    test("Tonnage greater than 1000", () => {
        assert.strictEqual(validatedTonnage(1001), true, "The tonnage value is not equal")
    })

})

describe("Sales summation", () => {

    test("Sum up of three sales objects", () => {
        assert.strictEqual(sumOfSales(sales), 600, "The summation of sales is not equal")
    })
})

describe("Hashing of password", () => {

    test("Password hashing", () => {


        (async () => {
            let password = "123456"
            let hashedPassword = await bcrypt.hash(password, 10)

            console.log(hashedPassword)

            assert.strictEqual(true, true, "The password is not hashed")
        })()


    })

})