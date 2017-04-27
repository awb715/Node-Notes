console.log('Starting Notes.js');



var addNote =  (title, body) => {
   console.log('Adding Note', title, body) ;
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
