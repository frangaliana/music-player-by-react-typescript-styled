import { Song, PlayerAction } from './components';

export const replaceSong = (songs: Song[], song: Song, action: keyof PlayerAction) => {
  const songIndex = songs.map(item => item.trackId).indexOf(song.trackId);
  return action === 'previous' && songIndex >= 1
    ? songs[songIndex - 1]
    : action === 'next' && songIndex < songs.length - 1
    ? songs[songIndex + 1]
    : null;
};
