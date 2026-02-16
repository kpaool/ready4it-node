const assert = require("node:assert")
const { test, describe } = require("node:test")
const { isNotSalesManager } = require("../middleware/index.js")

describe("Testing isNoteSalesManager middleware", () => {

    test("Testing sales manager", () => {
        const req = {
            user: {
                role: "sales-manager"
            }
        }

        const res = {
            status: () => {
                return {
                    json: () => {
                        return {
                            message: "You are not authorised to access this resource"
                        }
                    }
                }
            }
        }

        const next = () => {
            return true
        }

        assert.notStrictEqual(isNotSalesManager(req, res, next), true, "The sales manager is not authorised to access this resource")
    })

    test("Testing admin", () => {
        const req = {
            user: {
                role: "admin"
            }
        }

        const res = {
            status: () => {
                return {
                    json: () => {
                        return {
                            message: "You are not authorised to access this resource"
                        }
                    }
                }
            }
        }

        const next = () => {
            return true
        }

        assert.strictEqual(isNotSalesManager(req, res, next), true, "The sales manager is not authorised to access this resource")
    })

})



