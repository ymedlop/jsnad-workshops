const fetch = require('node-fetch');
const WithTime = require('./WithTime');
const EventEmitter = require('./EventEmitter');

// Test cases
const myEmitter = new EventEmitter();

function c1() {
    console.log('an event occurred!');
}

function c2() {
    console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

// Register eventOnce for one time execution
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.once('init', () => console.log('init once fired'));

// Register for 'status' event with parameters
myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));

myEmitter.emit('eventOne');

// Emit 'eventOnce' -> After this the eventOnce will be 
// removed/unregistered automatically
myEmitter.emit('eventOnce');
myEmitter.emit('eventOne');
myEmitter.emit('init');
myEmitter.emit('init'); // Will not be fired
myEmitter.emit('eventOne');
myEmitter.emit('status', 200, 'ok');

// Get listener's count
console.log(myEmitter.listenerCount('event1'));

// Get array of rawListeners//
// Event registered with 'once()' will not be available here after the 
// emit has been called
console.log(myEmitter.rawListeners('event1'));

// Test case 2
const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

const readFile = (url, cb) => {
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function (data) {
            cb(null, data);
        });
}

withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');


myEmitter.off('eventOne', c1);
myEmitter.off('eventOne', c2);

// This will be printed before withTime (as withTime readFile is async)
console.log(myEmitter.listenerCount('eventOne'));
console.log(withTime.rawListeners("begin"));
