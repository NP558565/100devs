const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    outputHTMLFile('index.html', req, res);
  }
  else if (page == '/otherpage') {
    outputHTMLFile('otherpage.html', req, res);
  }
  else if (page == '/otherotherpage') {
    outputHTMLFile('otherotherpage.html', req, res);
  }
  else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'leon'){
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        outputJSON(objToJson, req, res);
      }//student = leon
      else if(params['student'] != 'leon'){
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown" 
        }
        outputJSON(objToJson, req, res);
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    outputCSSFile('css/style.css', req, res);
  }else if (page == '/js/main.js'){
    outputJSFile('js/main.js', req, res);
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

// FUNCTION / METHOD EXTRACTION - REFACTORING TECHNIQUE

// YOU CAN TAKE IT A STEP FURTHER BY MAKING THESE INTO SEPARATE FILES

function outputHTMLFile(fileName, req, res) {
  fs.readFile(fileName, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}
function outputCSSFile(fileName, req, res) {
  fs.readFile(fileName, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    res.end();
  });
}
function outputJSFile(fileName, req, res) {
  fs.readFile(fileName, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}
function outputJSON(objectToJson, req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(objToJson));
  res.end();
}
