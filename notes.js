console.log('Starting Notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); //creates json data of notes
    }
    catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    
     fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    
};
var addNote = (title, body) => {
    
    var notes = fetchNotes();
    var note = {
        title
        , body    
    };
    var dupNotes = notes.filter((note) => note.title === title);
    
    if (dupNotes.length === 0) { //if the title doesnt already exist in note file
        notes.push(note);
       saveNotes(notes);
      return note;     
    }
   
  
}; //addNote
var getAll = () => {
    console.log('Getting all notes');
};
var getNote = (title) => {
    console.log('Getting ', title);
}
var removeNote = (title) => {
    console.log('Removing ', title);
}
module.exports = {
    addNote: addNote
    , getAll: getAll
    , getNote: getNote
    , removeNote: removeNote
}; //entire object set to exports, accessing notes from another page will allow us to call these functions