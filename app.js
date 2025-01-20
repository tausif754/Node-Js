const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

const content = "Hello World";
fs.writeFile("output.txt", content, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("File written successfully\n");
  }
});
