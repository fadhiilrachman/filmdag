"use strict";

let port = 3002;
let app_name='Filmdag!';

const Filmdag = require('./src/Filmdag')

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

app.get('/movie/:movieId', (req, res) => {
	if (!(req.params.movieId)) {
		res.status(500).send('Error');
	}
    var movie_id = req.params.movieId;
    fd.getFilmById(movie_id).then(function(d) {
        fd.getReviewsFilmById(movie_id).then(function(r) {
            let data = JSON.parse( d.toString() );
            let data_r = JSON.parse( r.toString() );
            var app_name = data.title;
            var rd_time = new Date( data.release_date );
            var release_date = rd_time.getDate() +', '+ rd_time.getFullMonth() +' '+ rd_time.getFullYear();
            var release_year = rd_time.getFullYear();

            var reviews = data_r.reviews;
            res
                .status(200)
                .render('movie-overview', { page_title: app_name, data: data, data_r: data_r,
                    release_year: release_year, release_date:release_date, reviews: reviews
                });
        })
    })
})

app.get('/', (req, res) => {
    res
        .status(200)
        .render('index', { page_title: app_name })
})

app
    .listen(port, () => console.log('[filmdag]', 'App listening to port ' + port))