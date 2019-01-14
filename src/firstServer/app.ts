import http from 'http';

const server = http.createServer((request, response) => console.log(request));

server.listen(3000);