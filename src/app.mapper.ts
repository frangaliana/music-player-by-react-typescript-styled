import { AM } from './core/api';
import * as VM from './components/song/song.model';

export const mapSongsApiModelToViewModel = (song: AM.Song): VM.Song =>
  song && {
    artistName: song.artistName,
    artworkUrl60: song.artworkUrl60,
    artworkUrl100: song.artworkUrl100,
    collectionName: song.collectionName,
    previewUrl: song.previewUrl,
    primaryGenreName: song.primaryGenreName,
    trackId: song.trackId,
    trackName: song.trackName,
    trackPrice: song.trackPrice,
    trackTimeMillis: song.trackTimeMillis,
    isFirst: false,
    isLast: false,
  };
