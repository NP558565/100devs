const http = require('http')
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

//WEB SERVER W/ 2 ROUTES
http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  if (page == '/') {
    outputHTMLFile('index.html', req, res);
  } else if (page == '/flip') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({Winner: coinFlipper()}));
      res.end();
  }
  else if (page == '/css/style.css'){
    outputCSSFile('css/style.css', req, res)
  }else if (page == '/js/main.js'){
    outputJSFile('/js/main.js', req, res) 
  }
  else if (page == '/css/normalize.css'){
    outputCSSFile('/css/normalize.css', req, res)
  }
}).listen(8000)

function coinFlipper(){
  let num = Math.random();

  if (num < 0.5) {
    return "Heads"
  } else {
    return "Tails"
  }
}

// FUNCTION / METHOD EXTRACTION
function outputHTMLFile(fileName, req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}
function outputCSSFile(fileName, req, res) {
  fs.readFile('css/style.css', function(err, data) {
    res.write(data);
    res.end();
  });
}
function outputJSFile(fileName, req, res) {
  fs.readFile('js/main.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}