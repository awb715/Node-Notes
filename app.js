
//3rd party module
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//user create module
const notes = require('./notes.js');
//this connects exports in notes.js to this page.

var titleOption = {describe: 'Title',
      demand:true,
      alias:'t'};
var bodyOption = {
        describe:'Body',
        demand:true,
        alias:'b'
    }

const argv = yargs.command('add','Add new note',{ //options object
  title:titleOption ,
    body:bodyOption
})
.command('list','Show all notes')
.command('read','read 1 note',{ //options object
  title:titleOption
})
.command('remove','removing 1 note',
        {title:titleOption}
        )
.help()
.argv;
var command = argv._[0];

console.log('Yargs', argv);
console.log('Command: ', command);
if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
       notes.logNote(note);
    }
    else {
        console.log('Title taken');
    }
}
else if (command === 'list') {
   var allNotes = notes.getAll();
    
    console.log(`Printing ${allNotes.length} note(s).`);
    
    allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {
  var readNote = notes.getNote(argv.title);
    console.log('Note Found');
  if(readNote){  notes.logNote(readNote)}
    else{'Note not found'};
}
else if (command === 'remove') {
   var noteRemoved= notes.removeNote(argv.title);
    
   var message = noteRemoved ? 'Note was removed': 'Note not found';
    //first time using ternary operator. message will be left value if true and right value if noteRemoved false.
    console.log(message);
}
else {
    console.log('Command not recognized');
}