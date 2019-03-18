import * as React from 'react';
import { SearchLayout } from './layouts';
import { NavigationBar, ContentContainer } from './components';

interface AppProps {}

const initialSearchState: string = '';

export const App: React.FunctionComponent<AppProps> = props => {
  const pageTitle = 'Music Player';
  const [searchInput, setSearchInput] = React.useState(initialSearchState);

  const handleChange = (newSearch: string) => setSearchInput(newSearch);

  // TODO: Change songs and send the songs by search
  return (
    <SearchLayout
      navigationBar={
        <NavigationBar
          title={pageTitle}
          initialSearchInput={searchInput}
          loading={false}
          onSearchInputUpdated={handleChange}
        />
      }
      content={<ContentContainer songs={[]} />}
    />
  );
};
