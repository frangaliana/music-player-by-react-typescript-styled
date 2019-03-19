import { Song } from './song.model';

export interface ResultApiModel {
  resultCount: number;
  results: Song[];
}
