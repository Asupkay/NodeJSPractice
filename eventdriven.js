//Import Events module
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler
var connectHandler = function connected() {
    //On connected print connection successful
    console.log('connection succesful.');

    //Emit that we have received the data
    eventEmitter.emit('data_received');
}

//"On" event connection do connectHandler
eventEmitter.on('connection', connectHandler);

//"On" event data received do this function
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
});

//Send out an event connection
eventEmitter.emit('connection');

console.log("Program Ended.");
