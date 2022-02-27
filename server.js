(function () {
    "use strict";

    var sass = require('node-sass');
    const express = require('express');
    const path = require("path");


    const app = express();


    // Setting up Views
    app.set("view engine", "ejs");
    app.set('views', __dirname + '/views');
    app.use('/script', express.static(__dirname + '/script'));
    app.use('/images', express.static(__dirname + '/images'));
    app.use('/css', express.static(__dirname + '/css'));

    app.get('/', (req, res) => {
        return res.render("index");
    });

    app.get('/menupalette', (req, res) => {
        return res.render("menupalette");
    });

    app.get('/menudelice', (req, res) => {
        return res.render("menudelice");
    });

    app.get('/menufrancaise', (req, res) => {
        return res.render("menufrancaise");
    });

    app.get('/menunote', (req, res) => {
        return res.render("menunote");
    });


    app.listen('3001', () => {
        console.log('listening on *:3001');
    });


}());