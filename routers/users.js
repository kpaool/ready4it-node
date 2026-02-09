// Import necessary modules
const express = require("express")
const usersModel = require("../models/users.js")
const { KGLError } = require("../utils/custom-error.js")

// Create a new router instance
const router = express.Router()


// Route to get all users
router.get("/", async (req, res, next) => {
    // Fetch all users from the database
    const users = await usersModel.find({})
    try {
        console.log(users)
        // If users exist, return them with a 200 status
        if (users) {
            res.status(200).json(users)
        } else {
            // Throw a custom error if no users are found
            throw new KGLError("No users found", 404)
        }

    } catch (error) {
        // Pass any caught errors to the error handling middleware
        next(error)
    }
})

// Route to get a single user by ID
router.get("/:id", async (req, res, next) => {
    // Find a user by the ID provided in the request parameters
    const user = await usersModel.findById(req.params.id)
    try {
        // If the user exists, return it with a 200 status
        if (user) {
            res.status(200).json(user)
        } else {
            // Throw a custom error if the user is not found
            throw new KGLError("No user found", 404)
        }
    } catch (error) {
        next(error)
    }
})

// Route to update a user by ID
router.patch("/:id", async (req, res, next) => {
    try {
        let id = req.params.id
        let body = req.body

        // Update the user with the new data
        // { new: true } returns the updated document
        // { runValidators: true } ensures schema validation rules are applied
        usersModel.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        })
            .then((_user) => {
                res.status(200).json({ message: "User updated successfully", data: _user })
            })
            .catch((err) => {
                next(new KGLError("Failed to update user", 400, err.message))
            })


    } catch (err) {
        next(new KGLError("Faile to update user", 400, err.message))
    }
})

// Route to create a new user
router.post("/", async (req, res, next) => {
    try {
        let body = req.body

        // Set a default password for the new user
        body.password = "123456"

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

// Route to delete a user by ID
router.delete("/:id", async (req, res, next) => {
    try {
        let id = req.params.id

        // Find the user by ID and delete them
        usersModel.findByIdAndDelete(id)
            .then((_user) => {
                res.status(200).json({ message: "User deleted successfully", data: _user })
            })
            .catch((err) => {
                next(new KGLError("Failed to delete user", 400, err.message))
            })

    } catch (error) {
        next(new KGLError("Failed to delete user", 400, error.message))
    }
})

module.exports = { router }