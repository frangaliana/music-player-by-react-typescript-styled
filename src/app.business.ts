import { Song, PlayerAction } from './components';
import { OrderItems } from './components/content-container/table';

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

export const normalizeText = (value: string): string =>
  value
    ? value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
    : '';

export const orderByField = (field: keyof OrderItems, reverse: boolean) => {
  const parse = (x: Song) => (typeof x[field] === 'string' ? String(x[field] as string) : x[field]);
  const reverseNumber: number = !reverse ? 1 : -1;

  return (a: Song, b: Song): number => {
    const x = parse(a);
    const y = parse(b);

    return reverseNumber * (x > y ? 1 : 0) - (y > x ? 1 : 0);
  };
};
