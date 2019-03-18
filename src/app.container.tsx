import * as React from 'react';
import { SearchLayout } from './layouts';
import { NavigationBar, ContentContainer } from './components';

interface AppProps {}

export const App: React.FunctionComponent<AppProps> = props => {
  const pageTitle = 'Music Player';

  // TODO: Change songs and send the songs by search
  return (
    <SearchLayout
      navigationBar={<NavigationBar title={pageTitle} handleChange={null} handleSearch={null} />}
      content={<ContentContainer songs={[]} />}
    />
  );
};
