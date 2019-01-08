import fs from 'fs';
import path from 'path';

const firstApp = () =>
{
    console.log('Hello world from nodejs');
    
    fs.writeFileSync(path.resolve(__dirname, 'helloWorld.txt'),
        "Hello world from Node JS to file");
}

firstApp();

