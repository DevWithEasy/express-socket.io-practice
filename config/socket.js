const { Server } = require("socket.io");

const initSocket=(server)=>{
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:5173"
        }
    });
    
    io.on('connection', (socket)=> {
        console.log('a user connected ' + socket.id);
    
    
        socket.on('disconnect',  (socket)=> {
            console.log('user disconnected' + socket.id);
        })
    })
}

module.exports = initSocket;