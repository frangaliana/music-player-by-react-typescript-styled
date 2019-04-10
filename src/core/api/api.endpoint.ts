import axios from 'axios';
import { SearchResult } from './api.model';

export const getSongs = (search: string): Promise<SearchResult> =>
  axios
    .get<SearchResult>('https://itunes.apple.com/search', {
      params: {
        term: search,
        limit: 5,
      },
    })
    .then(result => result.data);
