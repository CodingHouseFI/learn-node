"use strict";

let fs = require("fs"),
    http = require("http");

var exec = require('child_process').exec,
    child;

child = exec('vm_stat',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

// fs.readFile("./package.json", 'utf-8', (err, data) => {
//   let json = JSON.parse(data);
//   let requestHandlerCb = (req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`<h2>${json.description}</h2>`);
//   }
//   http.createServer(requestHandlerCb).listen(json.port);
//   console.log(`On port: ${json.port}`);
// });
