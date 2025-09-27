import { execute } from '../services/mysql.connector.ts'
import { type Artist } from './artists.model.ts'
import { artistQueries } from './artists.queries.ts';

export const readArtists = async () => {
    return execute<Artist[]>(artistQueries.readArtists, []);
};