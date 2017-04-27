console.log('Starting app.js');
//3rd party module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//user create module
const notes = require('./notes.js');



const argv=yargs.argv;
var command = process.argv[2];
console.log('Process ', process.argv);
console.log('Yargs', argv);

console.log('Command: ', command);
if (command === 'add') {
   console.log(notes.addNote);
    notes.addNote(argv.title,argv.body)
}
else if (command === 'list') {
    console.log('Listing all notes');
}
else if (command === 'read') {
    console.log('Reading note');
}
else if (command === 'remove') {
    console.log('Removing note');
}
else {
    console.log('Command not recognized');
}