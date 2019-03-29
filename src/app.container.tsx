import * as React from 'react';
import { RouteComponentProps, Switch, Route, withRouter } from 'react-router';
import { Song, NavigationBar, ContentContainer, SongComponent, PlayerAction } from './components';
import { mapSongsApiModelToViewModel } from './app.mapper';
import { replaceSong } from './app.business';
import { SearchLayout } from './layouts';
import { getSongs } from './api';

interface AppProps extends RouteComponentProps {}

export const AppInner: React.FunctionComponent<AppProps> = props => {
  const pageTitle = 'Music Player';

  const [search, setSearch] = React.useState<string>('');
  const handleChange = (newSearch: string) => {
    setSearch(newSearch);
    props.history.push('/');
  };
  const changeToHome = () => props.history.push('/');

  const [songs, setSongs] = React.useState<Song[]>([]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [song, setSong] = React.useState<Song>(null);

  React.useEffect(() => {
    setIsLoading(true);

    getSongs(search).then(searchResult => {
      setSongs(searchResult.results.map(song => mapSongsApiModelToViewModel(song)));
      setIsLoading(false);
    });
  }, [search]);

  const onClickSong = (song: Song) => {
    setSong(song);
    props.history.push(`/${song.trackId}`);
  };

  const handlePlayer = (action: keyof PlayerAction, song: Song) => {
    action && song && songs
      ? action === 'previous' || action === 'next'
        ? setSong(replaceSong(songs, song, action))
        : null // plays the song but I don't know what I have to do
      : null;
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
          <Route exact path="/:songName" render={() => <SongComponent song={song} handlePlayer={handlePlayer} />} />
        </Switch>
      }
    />
  );
};

export const App = withRouter(AppInner);
