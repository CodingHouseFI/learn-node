"use strict";

let fs = require("fs"),
    http = require("http");

fs.readFile("./package.json", 'utf-8', (err, data) => {
  let json = JSON.parse(data);
  let requestHandlerCb = (req, res) => {
    res.end(data);
  }
  http.createServer(requestHandlerCb).listen(json.port);
  console.log(`On port: ${json.port}`);
});
