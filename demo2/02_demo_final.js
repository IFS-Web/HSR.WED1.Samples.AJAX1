const fileSystem = require('fs').promises;

function openRead() {
    const fileHandle = fileSystem.readFile('./toRead.txt', {encoding: 'utf-8'})
        .then(
            (fileContent) => {
                console.log(`File has been read: ${fileContent}`);
            },
            (err) => console.log(`Error while reading the file. ${err}`));
}

openRead();
