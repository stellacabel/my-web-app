const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is a basic web app!\n');
});
server.listen(3000, () => {
  console.log('Hello, this is a basic web app!');
});
