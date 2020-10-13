/*
 # Challenge

  Write a program that will receive two command line arguments containing    
  the hostname and port. Using http.request send a POST request to

     url + '/users/create'

  with the body containing a JSON.stringify'ed object:

     {"user_id": 1}

  Do this five times with each time the user_id property being incremented,  
  starting at 1.

  Once these requests are done, send a GET request to:

     url + '/users'

  and console.log the response body for the GET request.

 ## Hints

  In this problem, you will need to co-ordinate a few async operations.

  Use async.series for this and pass in an Object. One of the task functions
  will need to use async.times to send POST requests using http.request. The
  other will then do the GET request.

  You can read more about async.times here:

  (https://github.com/caolan/async#times)
*/

const async = require('async');
const http = require('http');

const url = `http://${process.argv[2]}:${process.argv[3]}`;

const createUser = (id, cb) => {
    const req = http.request(`${url}/users/create`, { method: "POST"}, res => {
        res.on('data', chunk => {});
        res.on('end', () => cb(null, {"user_id": id}));
    })
    req.write(JSON.stringify({"user_id": id}))
    req.end()
};

async.series(
    {
        createUsers: cb => {
            async.times(5, (n, next) => {
                createUser(++n, function(err, user) {
                    next(err, user);
                });
            }, (err, users) => {
                if (err) cb(err);
                // we should now have 5 users
                cb(null, users);
            })
        },
        getUsers: cb => {
            let result = '';
            http.get(`${url}/users`, res => {
                res.on('data', chunk => result += chunk.toString());
                res.on('end', () => cb(null, result));
            })
        }
    },
    // optional callback
    (err, results) => {
        if (err) return console.error(err);
        // results is now equal to ['one', 'two']
        console.log(results.getUsers)
    }
);

