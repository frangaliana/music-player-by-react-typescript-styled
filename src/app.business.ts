import { Song, PlayerAction } from './components';

export const mapPositionedSong = (songs: Song[], song: Song): Song => {
  const index = songs.indexOf(song);
  return {
    ...song,
    isFirst: index === 0,
    isLast: index === songs.length - 1,
  };
};

export const replaceSong = (songs: Song[], song: Song, action: keyof PlayerAction) => {
  const songIndex = songs.map(item => item.trackId).indexOf(song.trackId);
  return action === 'previous' && songIndex > 0
    ? songs[songIndex - 1]
    : action === 'next' && songIndex < songs.length - 1
    ? songs[songIndex + 1]
    : null;
};
