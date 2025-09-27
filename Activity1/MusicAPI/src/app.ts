import express from 'express';
import albumsRouter from './albums/albums.routes.ts';
import artistsRouter from './artists/artists.routes.ts';
import logger from './middleware/logger.middleware.ts';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === 'development'){
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}
app.use('/', [albumsRouter, artistsRouter]);
