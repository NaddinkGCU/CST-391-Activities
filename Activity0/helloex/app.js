const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('This is an example response string. Now it\'s using nodemon! Can you see me? 👀'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));