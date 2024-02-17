import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text, TextProps } from '../lib/components/Typography';
import '@testing-library/jest-dom';
import 'jest-styled-components';

describe('Typography Component', () => {
  test('renders without crashing', () => {
    render(<Text variant="heading-1">Hey there peeps!</Text>);
  });

  test('renders with props', () => {
    const props = {
      variant: 'heading-1',
      color: '#0f0f0f',
      align: 'center',
    };

    render(<Text {...props}>Hey there peeps!</Text>);
    const textElement = screen.getByText('Hey there peeps!');

    expect(textElement).toBeInTheDocument();
  });
  test('applies custom text alignment when align prop is provided', () => {
    render(<Text alignment="left">Left Aligned Text</Text>);

    const textElement = screen.getByText('Left Aligned Text');
    const computedStyle = window.getComputedStyle(textElement);

    expect(computedStyle.textAlign).toBe('left');
  });

  test('applies custom color when color prop is provided', () => {
    render(<Text color="#00f">Colored Text</Text>);

    const textElement = screen.getByText('Colored Text');
    const computedStyle = window.getComputedStyle(textElement);

    expect(computedStyle.color).toBe('rgb(0, 0, 255)');
  });
});
