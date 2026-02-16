const express = require("express")
const router = express.Router()
const usersModel = require("../models/users.js")
const jwt = require("jsonwebtoken")

router.post("/login", async (req, res) => {
    // get user email and password from request body
    const { email, password } = req.body


    // we are looking for a user in the database with the email and password provided
    let _user = await usersModel.findOne({ email, password })

    // if user is found, return the user
    if (_user) {
        let user = {
            fullName: _user.fullName,
            email: _user.email,
            role: _user.role,
            department: _user.department,
            sub: _user._id
        }

        let token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.status(200).json({ message: "Login successful", token })
    } else {
        // if user is not found, return an error message
        res.status(401).json({ message: "Invalid credentials" })
    }

})

module.exports = { router }