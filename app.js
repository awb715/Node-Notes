

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


//fetch contents from module and store in fs constant

//var user = os.userInfo();
//
//fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`, function (err) {
//    if (err) {
//        console.log('Unable to write to file');
//   }
//});


//console.log(notes.addNote());

//console.log(notes.add(2, 3));

//console.log(_.isString(true));
//console.log(_.isString('aaron'));
var filteredArray = _.uniq(['Mike']);
console.log(filteredArray);
