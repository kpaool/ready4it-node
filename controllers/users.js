const usersModel = require("../models/users.js")
const { KGLError } = require("../utils/custom-error.js")
const bcrypt = require("bcrypt")


const getAllUsers = async (req, res, next) => {
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
}


const getUserByID = async (req, res, next) => {
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
}

module.exports = {
    getAllUsers,
    getUserByID
}