const fileSystem = require('fs').promises;

function openRead() {
    const fileHandle = fileSystem.readFile('./toRead.txt', {encoding: 'utf-8'});

    // TODO: Add .then() and log to console
}

openRead();
