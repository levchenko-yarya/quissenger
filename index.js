require('dotenv').config()

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('chat message', (msg)=> {
        console.log('message: ' + msg)
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(process.env.PORT, () => {
    console.log('server is running... ')
})