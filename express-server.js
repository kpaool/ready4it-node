const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { router: salesRouter } = require("./routers/sales.js")
const { router: usersRouter } = require("./routers/users.js")
const { simulateSalesAgent, authMiddleware } = require("./middleware/index.js")
const { errorHandler } = require("./middleware/error.js")
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const basicAuth = require('express-basic-auth');
const { router: adminRouter } = require("./routers/admin.js")
const { router: authRouter } = require("./routers/auth.js")
const jwt = require("jsonwebtoken")




const app = express()
const protectedRouter = express.Router()


app.use(cors({
    origin: "http://localhost:5500",
    optionsSuccessStatus: 200
}))


app.use(express.json())

// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
        title: 'KGL REST API Documentation',
        version: '1.0.5',
        description: 'This is the documentation for the KGL REST API for the frontend app',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
};

// Options for swagger-jsdoc
const options = {
    swaggerDefinition, // Use the swaggerDefinition object defined above
    apis: ['./routers/*.js'], // Specify the path to your API route files
};


app.use(express.static("public"))

// Configure basic authentication
const swaggerAuth = basicAuth({
    users: { 'admin': 'SuperSecretPassword123' }, // Replace with secure credentials (e.g., from environment variables)
    challenge: true, // Prompts the browser for credentials
    realm: 'Swagger Documentation'
});

// Create the Swagger specification
const swaggerSpec = swaggerJSDoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerAuth, swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// app.use(simulateSalesAgent)


protectedRouter.use("/sales", salesRouter)
protectedRouter.use("/users", usersRouter)
protectedRouter.use("/admin", adminRouter)


app.use("/auth", authRouter)
app.use("/", authMiddleware, protectedRouter)


app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error")
    } else {
        console.log(`Server is running successfully on port ${PORT}`)
    }

})