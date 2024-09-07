import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../lib/components/Button/index';
import { Variants, Sizes } from '../stories/Button.stories';
import '@testing-library/jest-dom';

const argsColor = {
  variant: 'default',
  size: 'md',
};

const args = {
  variant: 'default',
  size: 'md',
};

describe('Button Component', () => {
  test('renders without crashing', () => {
    render(<Button />);
  });

  test('renders Variants', () => {
    render(Variants(args));
    const outlinedButton = screen.getByText('Default');
    const filledButton = screen.getByText('destructive');

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
