const fs = require("fs")
const path = require("path")
const os = require("os")

fs.readFile("config.txt", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(data.toString())
    }
})


fs.readFile("deploy.json", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        let deploy = JSON.parse(data)
        // console.log(deploy)

        const SERVERHOST = deploy.server.host
        const SERVERPORT = deploy.server.port
    }
})


let errorLog = `\n${new Date().toLocaleDateString()} - Error: User tried to login multiple times`

// fs.appendFile("errorlogs.txt", errorLog, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Successfully saved log file")
//         fs.cp("errorlogs.txt","errorlogs.bak.txt",(err)=>{
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log("Successfully copied log file")
//             }
//         })

//     }
// })


// fs.unlink("errorlogs.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfully deleted log file")
//     }
// })




let errorLogFile = path.join(__dirname,"logs","errorlogs.txt")
let downloadFolder =  path.join(__dirname,"downloads")

console.log(os.cpus())
console.log(os.freemem())
console.log(os.platform())
console.log(os.version())