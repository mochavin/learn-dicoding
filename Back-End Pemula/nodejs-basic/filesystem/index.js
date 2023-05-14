const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log(error.message);
        return;
    }
    console.log(data);
}

const filePath = path.resolve(__dirname, 'notes.txt');
fs.readFile(filePath, 'UTF-8', fileReadCallback);