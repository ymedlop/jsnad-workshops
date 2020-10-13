/*
In this problem you will need to write a program that first reads the
contents of a file.

The path will be provided as the first command-line argument to your
program (i.e. process.argv[2]).

The file will contain a single URL. Using http.get, create a GET request
to this URL and console.log the response body.
*/

const fs = require('fs');
const http = require('http');
const async = require('async');

async.waterfall(
    [
        cb => {
            fs.readFile(process.argv[2], (err, data) => {
                if (err) cb(err);
                cb(null, data.toString());
            })
        },
        (url, cb) => {
            let result = '';

            http.get(url, res => {
                res.on('data', chunk => result += chunk.toString());
                res.on('end', () => cb(null, result));
            })
            .on('error', err => cb(err));
        }
    ],
    (err, result) => {
        if (err) return console.error(err);
        console.log(result);
    }
);

