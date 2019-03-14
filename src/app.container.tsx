import * as React from 'react';
import { SearchLayout } from './layouts';
import { NavigationBar, ContentContainer } from './components';

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = props => {
  const pageTitle = 'Music Player';

  return <SearchLayout navigationBar={<NavigationBar title={pageTitle} />} content={<ContentContainer />} />;
};
