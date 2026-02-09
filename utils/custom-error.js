
class KGLError extends Error {
    constructor(message, statusCode, reason = "") {
        super(message)
        this.statusCode = statusCode
        this.reason = reason
    }
}

module.exports = { KGLError }