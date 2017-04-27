//var obj = {
//    
//    name:'Aaron'
//    
//};
//
//var stringObj = JSON.stringify(obj);
//JSON to string
//console.log(typeof stringObj);
//console.log(stringObj);


//converts tring to original object
//var personString = '{"name":"Aaron","age":22}';
//var person = JSON.parse(personString);
//
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
    
    title:'some time',
    body: 'some body'
    
};

//original note string

//converting object to string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);