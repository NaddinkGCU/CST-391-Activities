import express, { type Request, type Response } from 'express';

const app = express();
// creates new instance of

const port = 3000;
// port for websterver to run on


app.get('/', (req: Request, res: Response) => { res.send('Hello World from TypeScript!'); });
// Since typescript is a superset of javascript with static typing, the type is defined
// So req: Request is setting the variable 'req' to type "Request"uv

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) }); 
// the second part of this line is just a callback with a message that the server has started
// if the line was just 'app.listen(port)' it would work the same, it's just to display info

