import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HomeHeader from '../components/view/HomeHeader';
import store from '../redux/configureStore';

describe('Testing the Home header', () => {
  it('Home header rendered correctly', () => {
    const home = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <HomeHeader />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
