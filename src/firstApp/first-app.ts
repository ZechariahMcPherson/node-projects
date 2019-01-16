import fs from 'fs';
import { resolve } from 'path';

const firstApp = () => {
  // tslint:disable-next-line
  console.log("Hello world from nodejs");

  fs.writeFileSync(
    resolve(__dirname, 'helloWorld.txt'),
    'Hello world from Node JS to file',
  );
};

firstApp();
