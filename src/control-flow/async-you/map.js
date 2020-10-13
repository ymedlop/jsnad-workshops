/*
## Challenge

Write a program that will receive two command-line arguments to two URLs.

Using http.get create two GET requests to these URLs.

You will need to use async.map, then console.log the results array.
*/

const async = require('async');
const http = require('http');

async.map(
    process.argv.slice(2),
    (url, cb) => {
        let result = '';
        http.get(url, res => {
            res.on('data', chunk => result += chunk.toString());
            res.on('end', () => cb(null, result));
        })
        .on('error', err => cb(err));
    },
    (err, results) => {
        if (err) console.error(err);
        console.log(results);
    }
);