import fs from 'fs';


const firstApp = ()  =>
{
    console.log('Hello world from nodejs');

    fs.writeFileSync("firstApp/helloWorld.txt","Hello world from Node JS to file");
}

firstApp();

