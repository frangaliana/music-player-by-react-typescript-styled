import { Song, PlayerAction } from './components';

export const replaceSong = (songs: Song[], song: Song, action: keyof PlayerAction) => {
  const songIndex = songs.indexOf(song);
  const newIndex =
    action === 'previous' && songIndex >= 1
      ? songIndex - 1
      : action === 'next' && songIndex < songs.length
      ? songIndex + 1
      : null;

  return songs[newIndex];
};
