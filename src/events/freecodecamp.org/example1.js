// Example 1 — Create an event emitter instance and register a couple of callbacks
const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

myEmitter.emit('eventOne');