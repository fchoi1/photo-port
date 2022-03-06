import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: 'Grocery aisle',
  category: 'commercial',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

describe('Contact component', () => {
  it('renders contact component', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// Test close modal button
describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    fireEvent.click(getByText('Close Modal'));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
