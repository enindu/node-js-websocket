import io from "socket.io"
import moment from "moment"

const websocket = io(3000)

websocket.on('connection', (socket) => {
  console.log('[INFO][%s] User connected to WebSocket', moment().format())

  socket.on('greet', (data) => {
    console.log('[MSG][%s] %s', moment().format(), data)
    socket.emit('greet', 'Greetings to the client')
  })
})
