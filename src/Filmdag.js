"use strict";

class Filmdag {

    constructor() {
        this.event = true
    }

    getMovieNowPlaying() {
        return new Promise(function(resolve, reject) {
            let { spawn } = require('child_process');
            let pyprog = spawn('python', ['src/python_class/get_now_playing.py']);
            pyprog.stdout.on('data', function(data) {
                resolve(data);
            });
            pyprog.stderr.on('data', (data) => {
                reject(data);
            });
        });
    }

    getPopularMovie() {
        return new Promise(function(resolve, reject) {
            let { spawn } = require('child_process');
            let pyprog = spawn('python', ['src/python_class/get_popular_movie.py']);
            pyprog.stdout.on('data', function(data) {
                resolve(data);
            });
            pyprog.stderr.on('data', (data) => {
                reject(data);
            });
        });
    }

    getAllGenres() {
        return new Promise(function(resolve, reject) {
            let { spawn } = require('child_process');
            let pyprog = spawn('python', ['src/python_class/get_all_genres.py']);
            pyprog.stdout.on('data', function(data) {
                resolve(data);
            });
            pyprog.stderr.on('data', (data) => {
                reject(data);
            });
        });
    }

}

module.exports = Filmdag;