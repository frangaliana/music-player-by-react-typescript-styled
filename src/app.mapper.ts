import { AM } from './api';
import * as VM from './components/song/song.model';

export const mapSongsApiModelToViewModel = (song: AM.Song): VM.Song => song && song;
