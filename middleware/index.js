const jwt = require("jsonwebtoken")

const userDetailsMiddleware = (req, res, next) => {
    const userDetailsStrng = req.get("user-details")
    if (!userDetailsStrng) {
        res.status(403)
        res.json({ message: "There is no user information found" })
    }
    const userDetails = JSON.parse(userDetailsStrng)



    if (userDetails.role && userDetails.role.toLowerCase() === "admin") {
        req.user = userDetails
        next()
    } else {
        res.status(403)
        res.json({ message: "You are not authorized to access this resource" })
    }

}


const isDirectorOrManager = (req, res, next) => {
    if (req.user && req.user.role && (req.user.role == "manager" || req.user.role == "director")) {
        next()
    } else {
        res.status(403)
        res.json({ message: "You are not authorized to access this resource" })
    }
}

const simulateSalesAgent = (req, res, next) => {
    req.user = {
        role: "agent",
        username: "Ali"
    }

    next()
}

const isNotSalesManager = (req, res, next) => {
    if (req.user && req.user.role.toLowerCase() == "sales-manager") {
        res.status(403).json({ message: "You are not authorised to access this resource" })
        return false
    } else {
        return next()
    }
}

const authMiddleware = (req, res, next) => {

    //Bearer eyqdfsdsf.fwfw23dw9.ddfsdfdf    this is the expected value from the header authorization

    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(401).json({ message: "Unauthorized", reason: err.message })
            } else {
                req.user = decode
                next()
            }
        })
    } else {
        res.status(401).json({ message: "Unauthorized" })
    }
}

module.exports = { userDetailsMiddleware, isDirectorOrManager, simulateSalesAgent, isNotSalesManager, authMiddleware }