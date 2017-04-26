console.log('Starting app');

const fs = require('fs');

//fetch contents from ms module and store in fs constant

const os = require('os');

fs.appendFile('greetings.txt', 'Hello world', function (err) {
    if (err) {
        console.log('Unable to write to file');
    }
});

var user = os.userInfo();