const http = require('http');
const url  = require('url');

const host = '0.0.0.0';
const port    = '9000';


const arrStations = [
    { id: '1',
      where: 'london',
      address: 'Tenth Avenue Notht',
      type: 'electric charger'
    },
    { id: 2,
      Where: 'new york',
      address: 'Fifth Avenue South',
      type: 'lectric charger' }
    ];
    
    
const server  = http.createServer((req, res) => {
      
      var pathname = url.parse(req.url, true).pathname;
      
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      
      if(pathname.indexOf('first') != -1) {
          
      res.end(JSON.stringify(arrStations[0]));
    
      } else {
       res.end(JSON.stringify(arrStations));         
                
      }
});

server.listen(port, host,  () => {
    console.log(`Server running on http://${host}:${port}`);
});
