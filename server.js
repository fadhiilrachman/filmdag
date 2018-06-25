"use strict";

let port = 3002;
let app_name='Filmdag!';

const Filmdag = require('./src/Filmdag.js')

const express = require('express')
const minify = require('express-minify')
const bodyparser = require('body-parser')
const compression = require('compression')

var app = express()
var fd = new Filmdag()

app
    .set('view engine', 'pug')
    .use(bodyparser.urlencoded({ extended: false }))
    .use(bodyparser.json())
    .use(compression())
    .use(minify())
    .use('/assets', express.static(__dirname + '/assets'))

/* Let's start routing... */

app.get('/api/movieNowPlaying', (req, res) => {
    fd.getMovieNowPlaying().then(function(d) {
        let data = JSON.parse( d.toString() )
        res
            .status(200)
            .json(data)
    })
})

app.get('/', (req, res) => {
    res
        .status(200)
        .render('index', { page_title: app_name })
    
})

app
    .listen(port, () => console.log('[filmdag]', 'App listening to port ' + port))