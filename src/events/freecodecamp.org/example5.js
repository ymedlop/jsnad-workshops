// Example 5— Getting Listener count
const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

console.log(myEmitter.listenerCount('eventOne'));