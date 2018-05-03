const http = require('http');
const url  = require('url');
const fs   = require('fs');

const host = '0.0.0.0';
const port    = '9000';


/* const arrStations = [
    { id: '1',
      where: 'london',
      address: 'Tenth Avenue Notht',
      type: 'electric charger'
    },
    { id: 2,
      Where: 'new york',
      address: 'Fifth Avenue South',
      type: 'lectric charger' }
    ]; */
    
let servingData = {};
    
// Build an array of functions as handlers
// Check for pathname as the key, and call the
// function that mataches the route

const handlers = [];

handlers['/'] = (req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(servingData.data)); 
}


handlers['/first'] = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(servingData.data[0])); 
}   
  
handlers['/second'] = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(servingData.data[1])); 
}

const server  = http.createServer((req, res) => {
      
      var pathname = url.parse(req.url, true).pathname;
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      
      if(handlers[pathname]) {
          handlers[pathname](req, res);
      } else {
          res.statusCode = 404;
          res.end("Not found!");
      }
      
      /* if(pathname.indexOf('first') != -1) {
      res.end(JSON.stringify(arrStations[0]));
      } else {
       res.end(JSON.stringify(arrStations)); 
      } */
});

fs.readFile('charging_stations.json', 'utf-8', (err, data) => {
    if (err) return;
     servingData = JSON.parse(data);
     server.listen(port, host,  () => {
        console.log(`Server running on http://${host}:${port}`);
     });    
});


module.exports = {
    handlers: handlers,
    data: servingData.data
};