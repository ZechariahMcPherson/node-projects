import http from 'http';

const server = http.createServer((request, response) => {

    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Hello from nodejs server</title></head>')
    response.write('<h1>Hello from nodejs server</h1>')
    response.write('</html>')
    response.end();
});

server.listen(3000);