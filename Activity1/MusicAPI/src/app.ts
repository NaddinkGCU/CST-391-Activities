import express from 'express';
import albumsRouter from './albums/albums.routes.ts';
import artistsRouter from './artists/artists.routes.ts';
import logger from './middleware/logger.middleware';

const app = express();
const port = 3000;

app.use('/', [albumsRouter, artistsRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

if (process.env.MODE_ENV == 'development'){
    
}
