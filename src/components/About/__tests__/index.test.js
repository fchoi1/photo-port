import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// Prevent memory leaks and clean up
afterEach(cleanup);

describe('About component', () => {
  // renders about test

  // 1st test
  it('renders', () => {
    // it declares what is being tested, test can be used interchangably
    render(<About />);
  });

  //2nd test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
