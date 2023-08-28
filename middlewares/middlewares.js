const express = require('express');
const cors = require ("cors");
const morgan = require ("morgan");
const path = require('path')

const middlewares = [
        cors(),
        morgan("dev"),
        express.json(),
        express.urlencoded({extended: false}),
        express.static(path.join(__dirname, 'public')),
        express.static(path.join(__dirname, 'client')),
    ]

function applyMiddlewares(app){
    middlewares.map(m => {
        app.use(m)
    })
}

module.exports = applyMiddlewares