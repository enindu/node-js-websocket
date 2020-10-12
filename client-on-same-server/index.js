import express from "express"
import path from "path"
import http from "http"
import moment from "moment"
import io from "socket.io"

const app = express()
const server = http.createServer(app)
const websocket = io(server)

app.get('/', (request, response) => {
  response.sendFile(path.resolve('public/index.html'))
})

websocket.on('connection', (socket) => {
  console.log('[INFO][%s] User connected to WebSocket', moment().format())

  socket.on('greet', (data) => {
    console.log('[MSG][%s] %s', moment().format(), data)
    socket.emit('greet', 'Greetings to the client')
  })
})

server.listen(8080, () => {
  console.log('[INFO][%s] Server started', moment().format())
})
