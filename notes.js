console.log('Starting Notes.js');


const fs = require('fs');

var addNote =  (title, body) => {
   var notes = [];
   var note = {
       title,
       body
   };
    
 try {
   var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);  //
     
 } catch (e){
     
 }

    var dupNotes = notes.filter((note) => note.title === title);
  
    
   notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var getAll =  () => {
   console.log('Getting all notes');
    
};

var getNote = (title) => {
    console.log('Getting ',title);
}

var removeNote = (title) => {
    console.log('Removing ', title);
}

module.exports = {
    
    addNote:addNote,
    getAll:getAll,
    getNote:getNote,
    removeNote:removeNote
};//entire object set to exports, accessing notes from another page will allow us to call these functions
