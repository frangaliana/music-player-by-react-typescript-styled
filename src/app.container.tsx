import * as React from 'react';
import axios from 'axios';
import { SearchLayout } from './layouts';
import { NavigationBar, ContentContainer } from './components';
import { ResultApiModel, Song } from './models';
import { songsApiModelToViewModel } from './app.mappers';

interface AppProps {}

const initialSearchState: string = '';
const initialSongsState: Song[] = [];
const initialLoadingState: boolean = false;

export const App: React.FunctionComponent<AppProps> = props => {
  const pageTitle = 'Music Player';

  const [search, setSearch] = React.useState(initialSearchState);
  const handleChange = (newSearch: string) => setSearch(newSearch);

  const [songs, setSongs] = React.useState(initialSongsState);

  const [isLoading, setIsLoading] = React.useState(initialLoadingState);

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get<ResultApiModel>('https://itunes.apple.com/search', {
        params: {
          term: search,
          limit: 5,
        },
      })
      .then(result => {
        setSongs(songsApiModelToViewModel(result.data));
        setIsLoading(false);
      });
  }, [search]);

  return (
    <SearchLayout
      navigationBar={
        <NavigationBar title={pageTitle} initialSearch={search} loading={false} onSearchInputUpdated={handleChange} />
      }
      content={<ContentContainer isLoading={isLoading} search={search} songs={songs} />}
    />
  );
};
