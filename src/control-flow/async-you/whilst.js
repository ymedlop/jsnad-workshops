/*
## Challenge

  Write a program that will receive a single command line argument to a URL.  

  Using async.whilst and http.get, send GET requests to this URL until the    
  response body contains the string "meerkat".

  console.log the amount of GET requests needed to retrieve the "meerkat"     
  string.

 ## Hints

  String.prototype.trim() is your friend.

  You can get documentation on async.whilst() here:

  (https://github.com/caolan/async#whilst)
  */

 const async = require('async');
 const http = require('http');

 let count = 0;
 let word = "";
 
async.whilst(
    function test() { return word !== "meerkat"; },
    function iter(cb) {
        http.get(process.argv[2], res => {
            let result = '';
            res.on('data', chunk => result += chunk.toString());
            res.on('end', () => {
                count++;
                word = result;
                cb(null, count);
            });
        })
        .on('error', err => cb(err));
    },
    (err, n) => {
        if (err) return console.error(err);
        // 5 seconds have passed, n = 5
        console.log(n);
    }
);