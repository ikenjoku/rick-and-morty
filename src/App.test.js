import { render, screen } from '@testing-library/react';
import App from './App';
import { RickAndMortyProvider } from './context/RickAndMortyProvider'
import { ThemeProvider } from 'styled-components'

test('renders learn react link', () => {
  render(<RickAndMortyProvider>
      <ThemeProvider toggleTheme={() => {}} theme={{}}>
      <App />
      </ThemeProvider>
    </RickAndMortyProvider>);
  const headerElement = screen.getByText(/The Rick and Morty Characters/i);
  expect(headerElement).toBeInTheDocument();
});
