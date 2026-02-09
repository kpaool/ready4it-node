const mongoose = require("mongoose")


// Define the schema for the user collection
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        min: 5 // Minimum length validation
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email is unique in the database
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, // e.g., 'admin', 'user'
        required: true
    },
    department: {
        type: String,
        required: true
    },
    status: {
        type: String, // e.g., 'active', 'inactive'
        required: true
    }
})

// Create the Mongoose model for the 'users' collection
const usersModel = mongoose.model("users", userSchema)

module.exports = usersModel 