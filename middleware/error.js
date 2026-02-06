
const errorHandler = (err, req, res, next) => {

    console.log(err)
    res.status(err.statusCode).json({ message: "Server error", error: err.message })

}

module.exports = { errorHandler }
