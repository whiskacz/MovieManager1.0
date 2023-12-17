import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Dodane
import store from '../../store/store'; // Dodane - import Redux Store
import LoginPage from '../LoginPage'; 
import { MemoryRouter } from 'react-router-dom';

test('renders LoginPage component', () => {
  render(
    <Provider store={store}> {/* Dodane */}
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );
  expect(
    screen.getByText('MovieManager')
  ).toBeTruthy();
});