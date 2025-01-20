const fs = require("fs");

const http = require("http");
const path = require("path");

const os = require("os");
const url = require("url");
const crypto = require("crypto");
const sayHello = require("./greetings");

const math = require("./math");
const { log } = require("console");

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
// const directory = "/user/local";
// const fileName = "example.txt";

// const fullPath = path.join(directory, fileName);
// console.log(fullPath);

// console.log("Platfrom: ", os.platform());
// console.log("CPU Architecture: ", os.arch());
// console.log("CPU Core Info: ", os.cpus());
// log("Free Memory: ", os.freemem());
// log("Total Memory: ", os.totalmem());

// const myurl = new URL("http://mywebsite.com/hello.html?id=100&status=active");
// console.log(myurl.href);
// console.log(myurl.toString());
// console.log(myurl.host);
// console.log(myurl.hostname);
// console.log("Pathname: ", myurl.pathname);

// console.log("Search Params: ", myurl.searchParams);

// const hash = crypto.createHash("sha256");
// hash.update("Hello World");
// console.log(hash.digest("hex"));

// how to create custom core module

const message = sayHello("Developer");
console.log(message);

log(math.add(2, 3));
log(math.subtract(5, 2));
