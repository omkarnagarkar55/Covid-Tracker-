import { render, screen } from '@testing-library/react';
import About from './About';
import App from './App';

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText('This application displays the COVID data using a API.');
  expect(linkElement).toBeInTheDocument();
});


