const ws = require('ws')
const http = require('http')
const util = require('util')

const server = http.createServer();

const wss = new ws.Server({server});
server.on('upgrade', (mesagge, sock, buf) => {
    console.log(util.inspect(args))
})

wss.on('connection', (sock, request) => {
    console.log('conn')
    console.log(util.inspect(request.headers, true, null, true))
    sock.on('message', (message) => {
        console.log(`msg: ${message}`)
    })
})

const PORT = 3001
server.listen(PORT, () => console.log(`listening to ${PORT}`))
