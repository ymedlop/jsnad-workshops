// Example 4— Unregistering events
const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

function c1() {
    console.log('an event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.off('eventOne', c1);
myEmitter.emit('eventOne');  // noop