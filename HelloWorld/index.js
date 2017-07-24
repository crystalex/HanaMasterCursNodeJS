/* Hello World! program in Node.js */
"use strict";

/* Required module */
var mHttp = require("http");

// Variables
var iPort = 8081;
var sMessage = "Hello World";

var oResponse = {
"returnCode" : "1",
"returnMessage" : "Everything OK",
"returnData" : "null"
};

//Create Http Server
var oServer = mHttp.createServer(function (req, res) {
console.log("\r\nRequest received");

res.writeHead(200, {'Content-type': 'text/plain'});

res.write(JSON.stringify(oResponse));
//res.end("Raspuns primit");

res.end();
console.log("Response sent !");
});
oServer.listen(iPort);

//Console will print the server info
console.log('Server running at http://127.0.0.1:' + iPort + '/' );

sMessage = sMessage + "!";

console.log(sMessage); 