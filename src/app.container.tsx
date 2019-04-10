import * as React from 'react';
import { RouteComponentProps, Switch, Route, withRouter } from 'react-router';
import { Song, NavigationBar, ContentContainer, SongComponent, PlayerAction } from './components';
import { mapSongsApiModelToViewModel } from './app.mapper';
import { replaceSong, mapPositionedSong, orderByField } from './app.business';
import { SearchLayout } from './layouts';
import { getSongs } from './core/api';
import { OrderItems } from './components/content-container/table';

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
    setSong(mapPositionedSong(songs, song));
    props.history.push(`/${song.trackId}`);
  };

  const clickOnOrder = (orderBy: keyof OrderItems) => {
    const newSongs = [...songs.sort(orderByField(orderBy, false))];
    setSongs(newSongs);
  };

  const handlePlayer = (action: keyof PlayerAction, song: Song) => {
    action && song && songs
      ? action === 'previous' || action === 'next'
        ? setSong(mapPositionedSong(songs, replaceSong(songs, song, action)))
        : null
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
              <ContentContainer
                isLoading={isLoading}
                search={search}
                songs={songs}
                onClickSong={onClickSong}
                clickOnOrder={clickOnOrder}
              />
            )}
          />
          <Route exact path="/:songName" render={() => <SongComponent song={song} handlePlayer={handlePlayer} />} />
        </Switch>
      }
    />
  );
};

export const App = withRouter(AppInner);
