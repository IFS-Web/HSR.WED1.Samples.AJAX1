const fileSystem = require('fs').promises;

function openRead() {
    const fileHandle = fileSystem.readFile('./toRead.txt', {encoding: 'utf-8'})
        .then(
            (fileContent) => {
                if (!fileContent) {
                    throw new Error("EMPTY_FILE");
                } else {
                    console.log(`File has been read: ${fileContent}`);
                }
            },
            (err) => console.log(`Error while reading the file. ${err}`))
        .catch(err => {
            console.log(`Invalid file given: ${err}`);
        });
}

openRead();
