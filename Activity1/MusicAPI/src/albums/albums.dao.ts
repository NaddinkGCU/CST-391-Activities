import mysql from 'mysql';
const { OkPacket } = mysql;

import { execute } from '../services/mysql.connector.ts';
import { type Album } from './albums.model.ts';
import { albumQueries } from './albums.queries.ts';

export const readAlbums = async () => {
    let result = execute<Album[]>(albumQueries.readAlbums, []);
    return result
};

export const readAlbumsByArtist = async (artistName: string) => {
    return execute<Album[]>(albumQueries.readAlbumsByArtist, [artistName]);
};

export const readAlbumsByArtistSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Album[]>(albumQueries.readAlbumsByArtistSearch, [search]);
};

export const readAlbumsByDescriptionSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Album[]>(albumQueries.readAlbumsByDescriptionSearch, [search]);
};

export const readAlbumsByAlbumId = async (albumId: number) => {
    return execute<Album[]>(albumQueries.readAlbumsByAlbumId, [albumId]);
};

export const createAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.createAlbum,
        [album.title, album.artist, album.description, album.year, album.image])
};

export const updateAlbum = async (album: Album) => {
    return execute<OkPacket>(albumQueries.updateAlbum, 
        [album.title, album.artist, album.year, album.image, album.description, album.albumId]);
};

export const deleteAlbum = async (albumId: number) => {
    return execute<OkPacket>(albumQueries.deleteAlbum, [albumId]);
};