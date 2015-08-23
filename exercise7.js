// GET the HTML content
//request('http://www.theonion.com', function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//      var $ = cheerio.load(body);
//  }
//};
// 

var http = require('http');//get http module
var bl = require('bl');// get b1 module ------ COULD NOT FIND MODULE

http.get(process.argv[2], function (request) {
    request.pipe(bl(function (err, data) {
        if (err)
        return console.error(data);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
