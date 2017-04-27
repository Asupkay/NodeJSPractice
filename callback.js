//blocking code example
/*
var fs = require("fs");

Blocks until it reads the file
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
*/
//Non-blocking code example
var fs = require("fs");
fs.readFile('input.txt',function (err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");

