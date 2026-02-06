
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

module.exports = { userDetailsMiddleware, isDirectorOrManager, simulateSalesAgent }