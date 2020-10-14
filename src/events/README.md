# Events

The events module allows us to easily create and handle custom events in Node.js. This module includes the EventEmitter class, which is used to raise and handle the events.

Some common properties and methods of the events module:

| Methods                          | Description                                                                                                                                   |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| addListener(event, listener)     | Adds a listener to the end of the listeners array for the specified event. No checks are made to see if the listener has already been added.  |
| on(event, listener)              | It can also be called as an alias of emitter.addListener()                                                                                    |
| once(event, listener)            | Adds a one-time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.            |
| emit(event, [arg1], [arg2], […]) | Raise the specified events with the supplied arguments.                                                                                       |
| removeListener(event, listener)  | Removes a listener from the listener array for the specified event. Caution: changes array indices in the listener array behind the listener. |
| removeAllListeners([event])      | Removes all listeners, or those of the specified event.                                                                                       |


 If an EventEmitter does not have at least one listener registered for the error event, and an error event is emitted, the error is thrown, a stack trace is printed, and the Node.js process exits.

 To prevent against crashing the Node.js process, it is recommended that listeners should always be added for the 'error' events.

 Examples:

 * [freecodecamp.org](frecodecamp.org)