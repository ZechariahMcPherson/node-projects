import http from 'http';
import fs from 'fs';
import { resolve } from 'path';

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === '/') {
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>enter message</title></head>');
    response.write(`<form action="/message" method="POST">
            <input type="text" name="message">
                <button type="submit">Send</button></form>`);
    response.write('</html>');
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    const body: any[] = [];
    request.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return request.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      fs.writeFile(resolve(__dirname, 'message.txt'), message, (error) => {
        response.writeHead(302, { Location: '/' });
        return response.end();
      });
    });
  }
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>Hello from nodejs server</title></head>');
  response.write('<h1>Hello from nodejs server</h1>');
  response.write('</html>');
  response.end();
});

server.listen(3000);
