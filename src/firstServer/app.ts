import http from 'http';

const server = http.createServer((request, response) => {
    const url = request.url;
    if(url === '/')
    {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>enter message</title></head>')
        response.write(`<form action="/message" method="POST">
            <input type="text" name="message">
                <button type="submit">Send</button></form>`);
        response.write('</html>')
        return response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Hello from nodejs server</title></head>')
    response.write('<h1>Hello from nodejs server</h1>')
    response.write('</html>')
    response.end();
});

server.listen(3000);