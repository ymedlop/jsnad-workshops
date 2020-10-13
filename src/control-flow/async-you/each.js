/*
## Challenge

  Create a program that will receive two URLs as the first and second
  command-line arguments.

  Then using http.get, create two GET requests, one to each URL, and
  console.log any errors.
*/

const async = require('async');
const http = require('http');

async.each(
    process.argv.slice(2),
    (url, cb) => {
        let result = '';
        http.get(url, res => {
            res.on('data', chunk => result += chunk);
            res.on('end', () => cb(null, result));
        })
        .on('error', err => cb(err));
    },
    err => {
        if (err) console.error(err);
    }
);