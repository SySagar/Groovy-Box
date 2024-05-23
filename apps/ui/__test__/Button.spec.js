import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../lib/components/Button/index';
import { Colors, Variants, Sizes } from '../stories/Button.stories';
import '@testing-library/jest-dom';

const argsColor = {
  variant: 'filled',
  size: 'md',
};

const args = {
  variant: 'filled',
  size: 'md',
  color: 'primary',
};

describe('Button Component', () => {
  test('renders without crashing', () => {
    render(<Button />);
  });

  //renders colors
  test('renders Colors ', () => {
    render(Colors(argsColor));
    const primaryButton = screen.getByText('primary');
    const secondaryButton = screen.getByText('secondary');

    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
  });

  test('renders Variants', () => {
    render(Variants(args));
    const outlinedButton = screen.getByText('Outlined');
    const filledButton = screen.getByText('Filled');

    expect(outlinedButton).toBeInTheDocument();
    expect(filledButton).toBeInTheDocument();
  });

  test('renders Sizes', () => {
    render(Sizes(args));
    const smallButton = screen.getByText('Small');
    const mediumButton = screen.getByText('Medium');
    const largeButton = screen.getByText('Large');

    expect(smallButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(largeButton).toBeInTheDocument();
  });
});
