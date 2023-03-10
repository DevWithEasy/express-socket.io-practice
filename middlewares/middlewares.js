const express = require('express');
const cors = require ("cors");
const morgan = require ("morgan");

const middlewares = [
        cors(),
        morgan("dev"),
        express.json(),
        express.json(),
        express.static("public")
    ]

function applyMiddlewares(app){
    middlewares.map(m => {
        app.use(m)
    })
}

module.exports = applyMiddlewares