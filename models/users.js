const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        min: 5
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})


const usersModel = mongoose.model("users", userSchema)

module.exports = usersModel 