import { Song, PlayerAction } from './components';
import { replaceSong, normalizeText, orderByField, mapPositionedSong } from './app.business';

describe('mapPositionedSong method', () => {
  it('should retrieve same song with new attributes (isFirst, isLast)', () => {
    const songData: Song = {
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
      isFirst: false,
      isLast: false,
    };

    const songsData: Song[] = [songData];

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
      isLast: true,
    };

    const obtainedResult: Song = mapPositionedSong(songsData, songData);

    expect(obtainedResult).toEqual(expectedResult);
  });
});

describe('replaceSong method', () => {
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

describe('normalizeText method', () => {
  it('should return empty when input argument is null', () => {
    const text: string = null;

    const expectedResult: string = '';
    const obtainedResult: string = normalizeText(text);

    expect(obtainedResult).toEqual(expectedResult);
  });
  it('should return empty when input argument is empty', () => {
    const text: string = '';

    const expectedResult: string = '';
    const obtainedResult: string = normalizeText(text);

    expect(obtainedResult).toEqual(expectedResult);
  });
  it('should remove all combining unicode characters from \u0300 to \u036f', () => {
    const text: string = `
      \u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f
      \u0310\u0311\u0312\u0313\u0314\u0315\u0316\u0317\u0318\u0319\u031a\u031b\u031c\u031d\u031e\u031f
      \u0320\u0321\u0322\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f
      \u0330\u0331\u0332\u0333\u0334\u0335\u0336\u0337\u0338\u0339\u033a\u033b\u033c\u033d\u033e\u033f
      \u0340\u0341\u0342\u0343\u0344\u0345\u0346\u0347\u0348\u0349\u034a\u034b\u034c\u034d\u034e\u034f
      \u0350\u0351\u0352\u0353\u0354\u0355\u0356\u0357\u0358\u0359\u035a\u035b\u035c\u035d\u035e\u035f
      \u0360\u0361\u0362\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f
    `;

    const expectedResult: string = '';
    const obtainedResult: string = normalizeText(text);

    expect(obtainedResult).toEqual(expectedResult);
  });
  it('should separate all combining unicode characters and remove them', () => {
    const text: string = `áèîñ`;
    const expectedResult: string = 'aein';
    const obtainedResult: string = normalizeText(text);

    expect(obtainedResult).toEqual(expectedResult);
  });
  it('should trim the results', () => {
    const text: string = ` example         `;
    const expectedResult: string = 'example';
    const obtainedResult: string = normalizeText(text);

    expect(obtainedResult).toEqual(expectedResult);
  });
});

describe('orderByField method', () => {
  it('should order by an existing field(string)', () => {
    const objectToTest: Song[] = [
      {
        artistName: 'pepe',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionName: 'example',
        previewUrl: 'string',
        primaryGenreName: 'example two',
        trackId: 1,
        trackName: 'string',
        trackPrice: 1,
        trackTimeMillis: 1,
        isFirst: false,
        isLast: false,
      },
      {
        artistName: 'julio',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionName: 'example',
        previewUrl: 'string',
        primaryGenreName: 'example two',
        trackId: 1,
        trackName: 'string',
        trackPrice: 1,
        trackTimeMillis: 1,
        isFirst: false,
        isLast: false,
      },
    ];
    const result = objectToTest.sort(orderByField('artistName', false));

    expect(result).toEqual(objectToTest);
  });

  it('should order by an existing field(number)', () => {
    const objectToTest: Song[] = [
      {
        artistName: 'pepe',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionName: 'example',
        previewUrl: 'string',
        primaryGenreName: 'example two',
        trackId: 1,
        trackName: 'string',
        trackPrice: 1,
        trackTimeMillis: 1,
        isFirst: false,
        isLast: false,
      },
      {
        artistName: 'julio',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionName: 'example',
        previewUrl: 'string',
        primaryGenreName: 'example two',
        trackId: 1,
        trackName: 'string',
        trackPrice: 1,
        trackTimeMillis: 2,
        isFirst: false,
        isLast: false,
      },
    ];
    const result = objectToTest.sort(orderByField('trackTimeMillis', false));

    expect(result).toEqual(objectToTest);
  });

  it('should order by an existing field(string) and reverse', () => {
    const objectToTest: Song[] = [
      {
        artistName: 'pepe',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionName: 'example',
        previewUrl: 'string',
        primaryGenreName: 'example two',
        trackId: 1,
        trackName: 'string',
        trackPrice: 1,
        trackTimeMillis: 1,
        isFirst: false,
        isLast: false,
      },
      {
        artistName: 'julio',
        artworkUrl60: 'string',
        artworkUrl100: 'string',
        collectionName: 'example',
        previewUrl: 'string',
        primaryGenreName: 'example two',
        trackId: 1,
        trackName: 'string',
        trackPrice: 1,
        trackTimeMillis: 1,
        isFirst: false,
        isLast: false,
      },
    ];
    const result = objectToTest.sort(orderByField('artistName', true));

    expect(result).toEqual(objectToTest);
  });
});
