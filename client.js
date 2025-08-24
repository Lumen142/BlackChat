const readline = require("readline")
const rl = readline.createInterface( {input : process.stdin, output : process.stdout} )

const { io } = require("socket.io-client")

rl.question(`
    BlackChat V0.0.1
        By Lumen142
    
    Please note: Your username will appear as your
    IP address in the chats you participate in with this version.

    In addition, do not log in to servers you are unfamiliar with.

    IP & Port ? : 
    `, (answer) => {
    const socket = io(answer)

    socket.on("connect", () => {
        console.log("Connected!");
    });

    socket.on("SepicalChat", (msg) => {
        readline.clearLine(process.stdout, 0)
        readline.cursorTo(process.output, 0)
        console.log(`${msg.ip} : ${msg.content}`)
        rl.prompt(true)
    })

    setTimeout(() => {
        function chat() {
            rl.question("", (answer) => {
                socket.emit("SepicalChat", answer)
                chat()
            })
        }
        chat()
    }, 350);
})
