var http = require('http');//get http module
var bl = require('bl');// get b1 module ------ COULD NOT FIND MODULE


http.get(process.argv[2], function (request) {
    request.pipe(bl(function (err, data) {
        if (err) return console.log(err);
        return console.error(data);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
