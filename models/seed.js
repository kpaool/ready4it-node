const User = require("./users")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
require("dotenv").config()

const seedUsers = async () => {
    try {
        const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/kgl"
        await mongoose.connect(URI)

        const password = await bcrypt.hash("password123", 10)
        const users = [
            {
                fullName: "Mr. Orban",
                email: "orban@kgl.com",
                password: password,
                role: "director",
                status: "active"
            },
            {
                fullName: "Manager One",
                email: "manager1@kgl.com",
                password: password,
                role: "manager",
                branch: "Maganjo",
                status: "active"
            },
            {
                fullName: "Sales Agent One",
                email: "agent1@kgl.com",
                password: password,
                role: "salesagent",
                branch: "Maganjo",
                status: "active"
            }
        ]

        await User.deleteMany({})
        await User.insertMany(users)
        console.log("Users seeded successfully")
        process.exit(0)
    } catch (error) {
        console.error("Error seeding users:", error)
        process.exit(1)
    }
}

seedUsers()

