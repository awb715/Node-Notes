

console.log('Starting app');

const fs = require('fs');

//fetch contents from ms module and store in fs constant

const os = require('os');


var user = os.userInfo();

fs.appendFile('greetings.txt',`Hello ${user.username}!`, function (err) {
    if (err) {
        console.log('Unable to write to file');
   }
});
