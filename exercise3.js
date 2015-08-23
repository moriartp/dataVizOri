var fs = require('fs'); //import fs module
var file = process.argv[2]; //get the argument fromprocess.argv (input file name)
var buffer = fs.readFileSync(file)// read file and convert to a buffer
var fileText = buffer.toString();// convert buufer to a text string
var splitText = fileText.split("\n");
console.log(splitText.length-1);