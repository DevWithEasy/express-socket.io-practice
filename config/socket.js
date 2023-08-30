const { Server } = require("socket.io");

const initSocket=(server)=>{
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:5173"
        }
    });
    
    io.on('connection', (socket)=> {
        socket.on('join_chat',data=>{
            socket.join(data.room)
            console.log(`Join room ${data.room}`)
        })

        socket.on('send_message',data=>{
            socket.to(data.room).emit('recieved_message',data)
        })
    
    
        socket.on('disconnect',  (socket)=> {
            console.log('user disconnected' + socket.id);
        })
    })
}

module.exports = initSocket;