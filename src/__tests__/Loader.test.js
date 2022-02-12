import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../components/Loader';

it('should not render a table row if data is not loading', () => {
  render(<Loader isLoading={false} />);
  expect(() => screen.getByText('Loading...')).toThrow();
});

it('should render a table row if data is loading', () => {
  render(
  <table>
    <tbody>
      <Loader isLoading={true} />
    </tbody>
  </table>);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
