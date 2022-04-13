import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import store from '../redux/configureStore';

describe('Testing the Home page', () => {
  it('Home page rendered correctly', () => {
    const home = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <Home />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
