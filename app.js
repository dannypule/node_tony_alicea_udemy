"use strict";

const Emiiter = require('events');
const events = require('./config').events;

var emtr = new Emiiter();

emtr.on(events.GREET, ()=> {
    console.log('someone greeted');
});

emtr.emit(events.GREET);