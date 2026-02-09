
// Custom error class extending the built-in Error class
class KGLError extends Error {
    // Constructor to initialize the error with a message, status code, and optional reason
    constructor(message, statusCode, reason = "") {
        super(message) // Call the parent Error constructor
        this.statusCode = statusCode // Set the HTTP status code
        this.reason = reason // Set the reason for the error
    }
}

module.exports = { KGLError }