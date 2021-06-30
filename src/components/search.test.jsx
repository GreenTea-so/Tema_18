import { render } from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Search from './search';
import store from '../store/store';

test('renders Header', () => {
  render(
    <Provider store={store}>
      <HashRouter>
        <Search />
      </HashRouter>
    </Provider>,
  );
});
