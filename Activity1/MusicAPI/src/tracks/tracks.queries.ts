import { updateTrack } from "./tracks.dao.ts";

export const trackQueries = {
    createTrack: `
    INSECT INTO tracks (album_id, title, number, video_url) VALUES(?,?,?,?)
    `,
    readTracks: `
    SELECT title AS title,video_url AS video,lyrics AS lyrics
    FROM music.tracks
    WHERE album_id = ?
    `,
    updateTrack: `
    UPDATE music.tracks
    SET title = ?, number = ?, video_url = ?, lyrics = ?
    WHERE id = ?;
    `
}