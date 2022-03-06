import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders contact component', () => {
    render(<ContactForm/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with correct name', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
  });

  it('renders with correct button name', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
