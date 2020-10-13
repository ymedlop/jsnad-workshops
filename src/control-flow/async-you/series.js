/*
 ## Challenge

  Write a program that will receive two URLs as the first and second
  command-line arguments.

  Using http.get, create a GET request to these URLs and pass the response
  body to the callback.

  Pass in an object of task functions, using the property names requestOne  
  and requestTwo, to async.series.  

  console.log the results in the callback for series when all the task
  functions have completed.

 ─────────────────────────────────────────────────────────────────────────────

   » To print these instructions again, run: async-you print                   
   » To execute your program in a test environment, run: async-you run
     program.js                                                                
   » To verify your program, run: async-you verify program.js                  
   » For help run: async-you help        
   */

const http = require('http');
const async = require('async');

function doGet(url, cb) {
    let result = '';
    http.get(url, res => {
        res.on('data', chunk => result += chunk.toString());
        res.on('end', () => cb(null, result)); 
    })
    .on('error', err => cb(err, null));
}

async.series(
    {
        requestOne: cb => doGet(process.argv[2], cb),
        requestTwo: cb => doGet(process.argv[3], cb),
    },
    // optional callback
    (err, results) => {
        if (err) return console.error(err);
        // results is now equal to ['one', 'two']
        console.log(results)
    }
);