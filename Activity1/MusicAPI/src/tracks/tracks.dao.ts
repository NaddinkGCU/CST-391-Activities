import { execute } from '../services/mysql.connector.ts'
import { type Track } from './tracks.model.ts'
import { trackQueries } from './tracks.queries.ts';

export const readTracks = async (albumId: number) => {
    return execute<Track[]>(trackQueries.readTracks, [albumId]);
};

export const createTrack = async (track: Track, index: number, albumId: number) => {
    return execute<Track[]>(trackQueries.createTrack,
        [albumId, track.title, track.number, track.video, track.lyrics]);
};

export const updateTrack = async (track: Track) => {
    return execute<Track[]>(trackQueries.updateTrack,
        [track.title, track.number, track.video, track.lyrics, track.trackId]);
};