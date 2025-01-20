const fs = require("fs");

const http = require("http");
const path = require("path");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

// const content = "Hello World";
// fs.writeFile("output.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File written successfully\n");
//   }
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World I am learning node js\n");
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// Example of path module
const directory = "/user/local";
const fileName = "example.txt";

const fullPath = path.join(directory, fileName);
console.log(fullPath);
