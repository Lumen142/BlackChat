// ------------- //

const readline = require("readline")
const rl = readline.createInterface( { input : process.stdin, output : process.stdout } )

let port = 0

// ------------- //

const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)

const { Server } = require("socket.io")
const { read } = require("fs")
const { stdin, stdout } = require("process")
const io = new Server(server)

// ------------- //

app.get("/", (req, res) => {
    
})

rl.question("Port? ", (answer) => {
    try {
        port = Number(answer)

        server.listen(port, () => {
            console.log(`Your server is running on port ${port.toString()}. :)`)
        })

        io.on("connection", (socket) => {
            console.log(`A new person has joined the server. | ${socket.handshake.address}`)

            socket.on("SepicalChat", (msg) => {
                console.log(`${socket.handshake.address} : ${msg}`)
                socket.broadcast.emit("SepicalChat", { "content" : msg, "ip" : socket.handshake.address })
            })
        })
    } catch (err) {
        console.error(err)
        process.exit()
    }
})
