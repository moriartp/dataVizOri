var fs = require ('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(error, data){
    if (error) throw error;
    //console.log(data);
    ext = '.' + ext;
    for (var i=0; i < data.length; i++){
//        if(path.extname(data[i] == ));
        if(path.extname(data[i]) == ext) {
            console.log(data[i]);
        }
        
    }
    //interate over arrany of file names
});