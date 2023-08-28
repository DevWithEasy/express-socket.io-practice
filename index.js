const http = require("http");
const path = require("path");
const express = require("express")
const app = express();
const server = http.createServer(app);
const applyMiddlewares = require("./middlewares/middlewares");
const initSocket = require("./config/socket");


//middleware
applyMiddlewares(app)

initSocket(server)

//router routes
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})


//run server
const port = process.env.PORT || 3001;
server.listen(port, function () {
    console.log(`Server listening on port ${port}`);
})