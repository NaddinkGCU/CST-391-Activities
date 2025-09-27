import { type Request, type Response } from 'express';
import { Album } from './albums.model.ts';
import { Track } from './../tracks/tracks.model.ts';
import * as AlbumDao from './albums.dao.ts';
import * as TracksDao from '../tracks/tracks.dao.ts'

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albums;
        let albumId = parseInt(req.query.albumId as string);

        console.log('albumId', albumId);
        if (Number.isNaN(albumId))
        {
            albums = await(AlbumDao.readAlbums());
        }
        else
        {
            albums = AlbumDao.readAlbumsByAlbumId(albumId);
        }
        await readTracks(albums, res);

        res.status(200).json(
            albums
        );
    }
    catch (error)
    {
        console.error('[albums.controller][readAlbums][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums'
        });
    }
};




// const ALBUMS = [
//     {id: 1, name: 'Please Please Me (1963)', band: 'The Beatles' },
//     {id: 2, name: 'With The Beatles (1963)', band: 'The Beatles' },
//     {id: 3, name: 'A Hard Day\'s Night (1964)', band: 'The Beatles' },
//     {id: 4, name: 'Beatles For Sale (1964)', band: 'The Beatles' },
//     {id: 5, name: 'Help! (1965)', band: 'The Beatles' },
//     {id: 6, name: 'Rubber Soul (1965)', band: 'The Beatles' },
//     {id: 7, name: 'Sgt Pepper\'s Lonely Hearts Club Band (1967)', band: 'The Beatles' },
//     {id: 8, name: 'Most of these records are not very good', band: 'The Beatles' },
// ];

// export const getAlbums = (req: Request, res: Response) => {
//     res.send(ALBUMS);
// };

