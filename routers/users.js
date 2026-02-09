const express = require("express")
const usersModel = require("../models/users.js")
const { KGLError } = require("../utils/custom-error.js")

const router = express.Router()


router.get("/", async (req, res, next) => {
    const users = await usersModel.find({})
    try {

        console.log(users)
        if (users) {
            res.status(200).json(users)
        } else {
            throw new KGLError("No users found", 404)
        }

    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    const user = await usersModel.findById(req.params.id)
    try {
        if (user) {
            res.status(200).json(user)
        } else {
            throw new KGLError("No user found", 404)
        }
    } catch (error) {
        next(error)
    }
})

router.patch("/:id", async (req, res, next) => {
    try {
        let id = req.params.id
        let body = req.body

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

router.post("/", async (req, res, next) => {
    try {
        let body = req.body

        body.password = "123456"

        let user = new usersModel(body)

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

router.delete("/:id", async (req, res, next) => {
    try {
        let id = req.params.id

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