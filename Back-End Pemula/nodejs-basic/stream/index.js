const fs = require("fs");

const readableStream = fs.createReadStream("stream/input.txt");
const writableStream = fs.createWriteStream("stream/output.txt");

readableStream.on("data", (chunk) => {
    writableStream.write(chunk);
});

readableStream.on("end", () => {
    writableStream.end();
    console.log("File berhasil dibaca dan ditulis ke output.txt");
});

readableStream.on("error", (err) => {
    console.log("error pad baca", err.message);
});

writableStream.on("finish", () => {
    console.log("Selesai.");
});