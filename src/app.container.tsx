import axios from 'axios';
import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { songsApiModelToViewModel } from './app.mappers';
import { ContentContainer, NavigationBar } from './components';
import { SearchLayout } from './layouts';
import { ResultApiModel, Song } from './models';
import { SongComponent } from './components/song.component';

interface AppProps extends RouteComponentProps {}

const initialSearchState: string = '';
const initialSongsState: Song[] = [];
const initialLoadingState: boolean = false;
const initialSongState: Song = null;

export const AppInner: React.FunctionComponent<AppProps> = props => {
  const pageTitle = 'Music Player';

  const [search, setSearch] = React.useState(initialSearchState);
  const handleChange = (newSearch: string) => {
    setSearch(newSearch);
    props.history.push('/');
  };
  const changeToHome = () => props.history.push('/');

  const [songs, setSongs] = React.useState(initialSongsState);

  const [isLoading, setIsLoading] = React.useState(initialLoadingState);

  const [song, setSong] = React.useState(initialSongState);

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

  const onClickSong = (song: Song) => {
    setSong(song);
    props.history.push(`/${song.trackId}`);
  };

  return (
    <SearchLayout
      navigationBar={
        <NavigationBar
          title={pageTitle}
          initialSearch={search}
          loading={false}
          onSearchInputUpdated={handleChange}
          changeToHome={changeToHome}
        />
      }
      content={
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ContentContainer isLoading={isLoading} search={search} songs={songs} onClickSong={onClickSong} />
            )}
          />
          <Route exact path="/:songName" render={() => <SongComponent song={song} />} />
        </Switch>
      }
    />
  );
};

export const App = withRouter(AppInner);
