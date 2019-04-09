import { Song, PlayerAction } from './components';
import { replaceSong } from './app.business';

describe('replaceSong should retrieve previous or next song', () => {
  it('should retrieve previous song', () => {
    const data: Song[] = [
      {
        artistName: 'ejemplo1',
        artworkUrl60: 'ejemplo1',
        artworkUrl100: 'ejemplo1',
        collectionName: 'ejemplo1',
        previewUrl: 'ejemplo1',
        primaryGenreName: 'ejemplo1',
        trackId: 1,
        trackName: 'ejemplo1',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: true,
        isLast: false,
      },
      {
        artistName: 'ejemplo2',
        artworkUrl60: 'ejemplo2',
        artworkUrl100: 'ejemplo2',
        collectionName: 'ejemplo2',
        previewUrl: 'ejemplo2',
        primaryGenreName: 'ejemplo2',
        trackId: 2,
        trackName: 'ejemplo2',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: false,
        isLast: false,
      },
      {
        artistName: 'ejemplo3',
        artworkUrl60: 'ejemplo3',
        artworkUrl100: 'ejemplo3',
        collectionName: 'ejemplo3',
        previewUrl: 'ejemplo3',
        primaryGenreName: 'ejemplo3',
        trackId: 3,
        trackName: 'ejemplo3',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: false,
        isLast: true,
      },
    ];

    const song: Song = {
      artistName: 'ejemplo2',
      artworkUrl60: 'ejemplo2',
      artworkUrl100: 'ejemplo2',
      collectionName: 'ejemplo2',
      previewUrl: 'ejemplo2',
      primaryGenreName: 'ejemplo2',
      trackId: 2,
      trackName: 'ejemplo2',
      trackPrice: 1.2,
      trackTimeMillis: 1.2,
      isFirst: false,
      isLast: false,
    };

    const action: keyof PlayerAction = 'previous';

    const expectedResult: Song = {
      artistName: 'ejemplo1',
      artworkUrl60: 'ejemplo1',
      artworkUrl100: 'ejemplo1',
      collectionName: 'ejemplo1',
      previewUrl: 'ejemplo1',
      primaryGenreName: 'ejemplo1',
      trackId: 1,
      trackName: 'ejemplo1',
      trackPrice: 1.2,
      trackTimeMillis: 1.2,
      isFirst: true,
      isLast: false,
    };

    const obtainedResult: Song = replaceSong(data, song, action);

    expect(obtainedResult).toEqual(expectedResult);
  });

  it('should retrieve next song', () => {
    const data: Song[] = [
      {
        artistName: 'ejemplo1',
        artworkUrl60: 'ejemplo1',
        artworkUrl100: 'ejemplo1',
        collectionName: 'ejemplo1',
        previewUrl: 'ejemplo1',
        primaryGenreName: 'ejemplo1',
        trackId: 1,
        trackName: 'ejemplo1',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: true,
        isLast: false,
      },
      {
        artistName: 'ejemplo2',
        artworkUrl60: 'ejemplo2',
        artworkUrl100: 'ejemplo2',
        collectionName: 'ejemplo2',
        previewUrl: 'ejemplo2',
        primaryGenreName: 'ejemplo2',
        trackId: 2,
        trackName: 'ejemplo2',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: false,
        isLast: false,
      },
      {
        artistName: 'ejemplo3',
        artworkUrl60: 'ejemplo3',
        artworkUrl100: 'ejemplo3',
        collectionName: 'ejemplo3',
        previewUrl: 'ejemplo3',
        primaryGenreName: 'ejemplo3',
        trackId: 3,
        trackName: 'ejemplo3',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: false,
        isLast: true,
      },
    ];

    const song: Song = {
      artistName: 'ejemplo2',
      artworkUrl60: 'ejemplo2',
      artworkUrl100: 'ejemplo2',
      collectionName: 'ejemplo2',
      previewUrl: 'ejemplo2',
      primaryGenreName: 'ejemplo2',
      trackId: 2,
      trackName: 'ejemplo2',
      trackPrice: 1.2,
      trackTimeMillis: 1.2,
      isFirst: false,
      isLast: false,
    };

    const action: keyof PlayerAction = 'next';

    const expectedResult: Song = {
      artistName: 'ejemplo3',
      artworkUrl60: 'ejemplo3',
      artworkUrl100: 'ejemplo3',
      collectionName: 'ejemplo3',
      previewUrl: 'ejemplo3',
      primaryGenreName: 'ejemplo3',
      trackId: 3,
      trackName: 'ejemplo3',
      trackPrice: 1.2,
      trackTimeMillis: 1.2,
      isFirst: false,
      isLast: true,
    };

    const obtainedResult: Song = replaceSong(data, song, action);

    expect(obtainedResult).toEqual(expectedResult);
  });

  it('should retrieve next song', () => {
    const data: Song[] = [
      {
        artistName: 'ejemplo1',
        artworkUrl60: 'ejemplo1',
        artworkUrl100: 'ejemplo1',
        collectionName: 'ejemplo1',
        previewUrl: 'ejemplo1',
        primaryGenreName: 'ejemplo1',
        trackId: 1,
        trackName: 'ejemplo1',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: true,
        isLast: false,
      },
      {
        artistName: 'ejemplo2',
        artworkUrl60: 'ejemplo2',
        artworkUrl100: 'ejemplo2',
        collectionName: 'ejemplo2',
        previewUrl: 'ejemplo2',
        primaryGenreName: 'ejemplo2',
        trackId: 2,
        trackName: 'ejemplo2',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: false,
        isLast: false,
      },
      {
        artistName: 'ejemplo3',
        artworkUrl60: 'ejemplo3',
        artworkUrl100: 'ejemplo3',
        collectionName: 'ejemplo3',
        previewUrl: 'ejemplo3',
        primaryGenreName: 'ejemplo3',
        trackId: 3,
        trackName: 'ejemplo3',
        trackPrice: 1.2,
        trackTimeMillis: 1.2,
        isFirst: false,
        isLast: true,
      },
    ];

    const song: Song = {
      artistName: 'ejemplo3',
      artworkUrl60: 'ejemplo3',
      artworkUrl100: 'ejemplo3',
      collectionName: 'ejemplo3',
      previewUrl: 'ejemplo3',
      primaryGenreName: 'ejemplo3',
      trackId: 3,
      trackName: 'ejemplo3',
      trackPrice: 1.2,
      trackTimeMillis: 1.2,
      isFirst: false,
      isLast: true,
    };

    const action: keyof PlayerAction = 'next';

    const expectedResult: Song = null;

    const obtainedResult: Song = replaceSong(data, song, action);

    expect(obtainedResult).toEqual(expectedResult);
  });
});
