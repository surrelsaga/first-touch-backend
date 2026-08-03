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

/*
CHALLANGE 3(add endpoints): Send back a response
1. Add a GET route for '/' that responds with an empty JSON object
2. Compile the app with 'npx tsc'
3. Run the compiled Javascript with 'node dist/index.js'
*/

import express from "express";
import type { Express, Request, Response } from "express";

import { pets } from './data/pets.ts';

const app: Express = express();
const port = 8000;

/*
CHALLENGE: Respond with some data!
1. Create an object called `pet` before the `/` route that includes:
   - name (string)
   - species (string)
   - adopted (boolean)
   - age (number)
2. Type your new pet object (inline or using a custom type)
3. Update your existing GET `/` route to return that pet object
4. Compile the TypeScript and run the resulting JavaScript to see it in action
*/

// start the server
app.listen(port, (): void => {
  console.log(`Listening on port: ${port}`);
});

// route for '/'
app.get("/", (req: Request, res: Response) => {
  // not this cuz the send will guess the arg type
  // res.send({});
  res.json(pets); // says the endpoint returns JSON
});
