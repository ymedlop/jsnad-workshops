// Example 2— Registering for the event to be fired only one time using once.
const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('eventOnce', () => {console.log('eventOnce once fired')}); 

myEmitter.emit('eventOnce');