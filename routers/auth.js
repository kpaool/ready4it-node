const express = require("express")
const router = express.Router()
const usersModel = require("../models/users.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post("/login", async (req, res) => {
    // get user email and password from request body
    const { email, password } = req.body



    // we are looking for a user in the database with the email and password provided
    let _user = await usersModel.findOne({ email })

    console.log(_user)

    if (!_user) {
        res.status(401).json({ message: "No user was found with the provided email" })
        return
    }

    let isPasswordCorrect = await bcrypt.compare(password, _user?.password)

    // if user is found, return the user
    if (_user && isPasswordCorrect) {
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


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user in the database
 *     tags:
 *       - Users
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             fullName:
 *               type: string
 *               description: The user name
 *             email:
 *               type: string
 *               description: The user email
 *             password:
 *               type: string
 *               description: The user password
 *             role:
 *               type: string
 *               description: The user role
 *             department:
 *               type: string
 *               description: The user department
 *             status:
 *               type: string
 *               description: The user status
 *     responses:
 *       201:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The user ID
 *                 name:
 *                   type: string
 *                   description: The user name
 *                 email:
 *                   type: string
 *                   description: The user email
 *                 password:
 *                   type: string
 *                   description: The user password
 */
router.post("/register", async (req, res, next) => {
    try {
        let body = req.body

        // Set a default password for the new user

        let password = await bcrypt.hash(body.password, 10)

        body.password = password

        // Create a new user instance with the request body
        let user = new usersModel(body)

        // Save the user to the database
        user.save()
            .then((_user) => {
                res.status(201).json({ message: "User created successfully", data: _user })
            })
            .catch((err) => {
                next(new KGLError(err.message, 400))
            })

    } catch (error) {
        next(error)
    }
})

module.exports = { router }