let http = require("http")
let fs = require("fs")


const server = http.createServer((req, res) => {


    console.log(req.url, req.method)

    switch (req.url) {
        case "/":
            res.writeHead(200, {
                "Content-Type": "text/plain"
            })

            res.write("Hello world")
            res.write(" from Ready 4IT")

            res.end()
            break;

        case "/sales":

            if (req.method == "GET") {

                fs.readFile("sales.json", (err, data) => {
                    if (err) {
                        res.writeHead(400, {
                            "Content-Type": "application/json"
                        })

                        res.write(JSON.stringify({ message: err }))
                        res.end()
                    } else {

                        res.writeHead(200, {
                            "Content-Type": "application/json"
                        })

                        res.write(JSON.stringify(JSON.parse(data)))
                        res.end()

                    }
                })

            } else if (req.method == "POST") {

                // code to process the data


                let body = ""
                req.on("data", (chunk) => {
                    body += chunk.toString()
                })


                req.on("end", () => {
                    // converted into an object
                    body = JSON.parse(body)
                    console.log(body)

                    fs.readFile("sales.json", (err, data) => {
                        if (err) {
                            res.writeHead(500, {
                                "content-type": "application/json"
                            })

                            res.write(JSON.stringify({ message: err }))
                            res.end()
                        } else {
                            let allSales = JSON.parse(data)
                            allSales.push(body)

                            let allSalesString = JSON.stringify(allSales)

                            fs.writeFile("sales.json", allSalesString, (err) => {
                                if (err) {
                                    res.writeHead(500, {
                                        "content-type": "application/json"
                                    })

                                    res.write(JSON.stringify({ message: err }))
                                    res.end()
                                } else {

                                    res.writeHead(201, {
                                        "content-type": "application/json"
                                    })

                                    res.write(JSON.stringify({
                                        message: "Sale added successfully",
                                        body
                                    }))

                                    res.end()

                                }
                            })

                        }
                    })





                })



            } else {
                res.writeHead(400, {
                    "content-type": "application/json"
                })

                res.write(JSON.stringify({ message: "This endpoint only proceses GET requests" }))
                res.end()

                break;
            }



            break;
        default:
            res.writeHead(404, {
                "Content-Type": "application/json"
            })

            res.write(JSON.stringify({ message: "Page not found" }))
            res.end()
            break;
    }



})

server.listen(3000, () => {
    console.log("Server is running successfully on port 3000")
})
