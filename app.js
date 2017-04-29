console.log('Starting app.js');
//3rd party module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//user create module
const notes = require('./notes.js');
//this connects exports in notes.js to this page.



const argv=yargs.argv;
var command = argv._[0];

console.log('Yargs', argv);

console.log('Command: ', command);
if (command === 'add') {

   var note = notes.addNote(argv.title,argv.body);
    
    if(note){
        console.log('Note Created');
        console.log('--');
         console.log('Title: ' +note.title);
         console.log('--');
         console.log('Body: ' +note.body);
    }
    else{
         console.log('Title taken');
       
    }
}
else if (command === 'list') {
    notes.getAll();
}
else if (command === 'read') {
  
    notes.getNote(argv.title);
}
else if (command === 'remove') {
   
    notes.removeNote(argv.title);
}
else {
    console.log('Command not recognized');
}