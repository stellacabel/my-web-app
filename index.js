const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/about') {
    res.end('About Page\n');
  } else if (req.url === '/login') {
    res.end('Login Page\n');
  } else {
    res.end('Hello from branch A!\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});