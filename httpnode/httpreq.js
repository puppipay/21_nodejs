// node.js comes with this module
const http = require("http");

// http has createserver method
// it takes function as an argument
// it takes two arguments, req, res
// let us just see some response

const server = http.createServer((req, res) => {
  res.end("hello world from node.js");
});

server.listen(3090);

// check to see it works
// http://localhost:3090/
