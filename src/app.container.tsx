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

    if (audio) audio.pause();
    setAudio(null);
    setPlaying(false);

    props.history.push('/');
  };

  const [songs, setSongs] = React.useState<Song[]>([]);
  React.useEffect(() => {
    setIsLoading(true);

    getSongs(search).then(searchResult => {
      setSongs(searchResult.results.map(song => mapSongsApiModelToViewModel(song)));
      setIsLoading(false);
    });
  }, [search]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [song, setSong] = React.useState<Song>(null);
  const onClickSong = (song: Song) => {
    setSong(mapPositionedSong(songs, song));
    props.history.push(`/${song.trackId}`);
  };

  const clickOnOrder = (orderBy: keyof OrderItems) => {
    const newSongs = [...songs.sort(orderByField(orderBy, false))];
    setSongs(newSongs);
  };

  const [audio, setAudio] = React.useState(null);
  const [isPlaying, setPlaying] = React.useState(false);
  React.useEffect(() => {
    if (song) {
      setAudio(new Audio(song.previewUrl));

      return () => setAudio(null);
    }
  }, [song && song.previewUrl]);

  const changeToHome = () => {
    audio.pause();
    setAudio(null);
    setPlaying(false);
    props.history.push('/');
  };

  const handlePlayer = (action: keyof PlayerAction, song: Song) => {
    if (action && song && songs) {
      if (action === 'previous' || action === 'next') {
        audio.pause();
        setAudio(null);
        setPlaying(false);
        setSong(mapPositionedSong(songs, replaceSong(songs, song, action)));
      } else if (action === 'play') {
        audio.play();
        setPlaying(true);
      } else if (action === 'pause') {
        audio.pause();
        setPlaying(false);
      }
    }
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
          <Route
            exact
            path="/:songName"
            render={() => <SongComponent song={song} handlePlayer={handlePlayer} isPlaying={isPlaying} />}
          />
        </Switch>
      }
    />
  );
};

export const App = withRouter(AppInner);
