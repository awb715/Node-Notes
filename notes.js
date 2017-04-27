console.log('Starting Notes.js');



var addNote = function (title, body){
   console.log('Adding Note', title, body) ;
};

module.exports = {
    
    addNote:addNote
};//entire object set to exports, accessing notes from another page will allow us to call these functions
