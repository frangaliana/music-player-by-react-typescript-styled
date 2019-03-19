import { ResultApiModel, Song } from './models';

export const songsApiModelToViewModel = (result: ResultApiModel): Song[] => result && result.results;
