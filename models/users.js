const mongoose = require("mongoose")

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['manager', 'salesagent', 'director'],
        required: true
    },
    branch: {
        type: String,
        required: function () { return this.role !== 'director'; }
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
}, { timestamps: true })

// Create the Mongoose model for the 'users' collection
const User = mongoose.model("User", userSchema)

module.exports = User