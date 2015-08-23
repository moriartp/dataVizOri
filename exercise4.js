var fs = require('fs'); //import fs module
var file = process.argv[2]; //get the argument fromprocess.argv (input file name)
var numLines = 0;

fs.readFile(file, function(error, data) {
    if (error) throw error;
    var text = data.toString();
    var splitText = text.split('\n');
    numLines = splitText.length-1;
    console.log(numLines);
});
