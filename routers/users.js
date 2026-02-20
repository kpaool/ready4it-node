// Import necessary modules
const express = require("express")
const usersModel = require("../models/users.js")
const { KGLError } = require("../utils/custom-error.js")
const bcrypt = require("bcrypt")
// Create a new router instance
const router = express.Router()
const { getAllUsers, getUserByID } = require("../controllers/users.js")



/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users from the database
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user ID
 *                   name:
 *                     type: string
 *                     description: The user name
 *                   email:
 *                     type: string
 *                     description: The user email
 *                   password:
 *                     type: string
 *                     description: The user password
 */
router.get("/", getAllUsers)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a single user by ID
 *     description: Retrieve a single user from the database by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to retrieve
 *     responses:
 *       200:
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
router.get("/:id", getUserByID)


/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update a single user by ID
 *     description: Update a single user in the database by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to update
 *     responses:
 *       200:
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
router.post("/", async (req, res, next) => {
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

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a single user by ID
 *     description: Delete a single user from the database by their ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to delete
 *     responses:
 *       200:
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