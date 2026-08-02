/*
CHALLENGE 1: Build a basic Express app using vanilla JavaScript
1. Import Express and create an app instance.
2. Listen on port 8000.
3. When the server starts, log: "Listening on port 8000"

You won't need to create any endpoints or routes yet
*/

/*
MINI CHALLENGE: Add some types
1. Use the 'Express' type where it makes sense
the app here is an Express object
2. Add a 'void' return type where it makes sense
the callback function is app.listen returns void
void vs undefined: read here "https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined"
- void: functions's return will not be observed
- undefined: not flexible as void, function must return undefined, cannot be anything other than undefined
but void accept that, void means the return value may have any value, not just undefined
*/

import express from 'express';
import type {Express} from 'express';

const app: Express = express();
const port = 8000;

app.listen(port, (): void => {
    console.log(`Listening on port: ${port}`)
});
