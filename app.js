const http = require ("http");
const path = require ("path");
const applyMiddlewares = require("./middlewares/middlewares");

//create express server
const express = require ("express")
const app = express();

//create http server using express
const server = http.createServer(app);

// create socket server using http server
const {Server} = require("socket.io");
const io = new Server(server,{
    cors: {
      origin: "http://localhost:3000"
    }
  });

io.on('connection',function(socket){
    console.log('a user connected ' + socket.id);

    //sending a message
    socket.on('chat',function(data){
        io.emit('chat_transfer',data);
    })

    //tying message broadcast
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })



    socket.on('disconnect',function(){
        console.log('user disconnected'+ socket.id);
    })
})














//middleware
applyMiddlewares(app)

//router routes
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,'public/pages/index.html'));
})


//run server
const port = process.env.PORT || 3001;
server.listen(port,function(){
    console.log(`Server listening on port ${port}`);
})