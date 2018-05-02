const http = require('http');

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
    
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(arrStations));
    
});

server.listen(port, host,  () => {
    console.log(`Server running on http://${host}:${port}`);
});
