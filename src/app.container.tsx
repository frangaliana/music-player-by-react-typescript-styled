import * as React from 'react';
import { SearchLayout } from './layouts';
import { NavigationBar, ContentContainer } from './components';

interface Props {}

export const App: React.FunctionComponent<Props> = props => (
  <SearchLayout navigationBar={<NavigationBar />} content={<ContentContainer />} />
);
