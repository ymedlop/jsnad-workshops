/*
## Challenge

  Write a program that will receive a URL as the first command line       
  argument.

  To this URL, for each of the values in the following array, send a GET  
  request using http.get with a query parameter named number set at the   
  proper value:

     ['one', 'two', 'three']

  Each time, convert the response body to Number and add it to the previous
  value. console.log the final reduced value.

 ## Hints

  Use async.reduce:

  (https://github.com/caolan/async#reduce)
*/

const async = require('async');
const http = require('http');

async.reduce(
    [
        'one',
        'two',
        'three'
    ],
    0, 
    (memo, item, cb) => {
        let result = '';
        http.get(`${process.argv[2]}?number=${item}`, res => {
            res.on('data', chunk => result += chunk.toString());
            res.on('end', () => cb(null, memo + Number(result)));
        })
        .on('error', err => cb(err));
    }, (err, result) => {
        if (err) return console.error(err);
        // result is now equal to the last value of memo, which is 6
        console.log(result);
    }
);
