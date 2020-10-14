// Example 6— Getting Raw Listeners
const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

console.log(myEmitter.rawListeners('eventOne'));