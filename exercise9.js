var http = require('http');//get http module
var URLs = [process.argv[2],process.argv[3],process.argv[4]];
var count = 0;
var allTheData = [];


function getData(url) {
    var dataStore = "";
    http.get(url, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(sandwich){
            dataStore += sandwich;
        });
        res.on('end', function() {
    count += 1;
    var index = URLs.indexOf(url);
    allTheData[index] = dataStore;
        if (count === 3) {
            printData();
        }
    });
        res.on('error', console.error);
        
    });
}

function printData(){
    for (var i=0; i<allTheData.length; i++) {
        console.log(allTheData[i])
    }
}
for (var i = 0; i <URLs.length; i++) {
    getData(URLs[i])
}