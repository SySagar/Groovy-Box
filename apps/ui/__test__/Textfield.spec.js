import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TextField } from '../lib/components/Textfield';
import '@testing-library/jest-dom';

const textFieldArgs = {
  label: 'Label',
  placeholder: 'Placeholder',
  startIcon: <span>Start Icon</span>,
  endIcon: <span>End Icon</span>,
};

describe('TextField Component', () => {
  test('renders disabled TextField', () => {
    render(<TextField disabled {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    expect(inputElement).toBeDisabled();
  });

  test('renders label and placeholder', () => {
    render(<TextField {...textFieldArgs} />);
    const labelElement = screen.getByText('Label');
    const inputElement = screen.getByPlaceholderText('Placeholder');
    const startIcon = screen.getByText('Start Icon');
    const endIcon = screen.getByText('End Icon');

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(startIcon).toBeInTheDocument();
    expect(endIcon).toBeInTheDocument();
  });

  test('handles onChange event', () => {
    const onChangeMock = jest.fn();
    render(<TextField onChange={onChangeMock} {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    fireEvent.change(inputElement, { target: { value: 'test value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe('test value');
  });

  test('renders read-only TextField', () => {
    render(<TextField readOnly {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    expect(inputElement).toHaveAttribute('readonly');
  });

  test('renders required TextField', () => {
    render(<TextField required {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    expect(inputElement).toBeRequired();
  });

  test('handles onKeyPress event', () => {
    const onKeyPressMock = jest.fn();
    render(<TextField onKeyPress={onKeyPressMock} {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    fireEvent.keyPress(inputElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });

    expect(onKeyPressMock).toHaveBeenCalledTimes(1);
  });

  test('handles onKeyUp event', () => {
    const onKeyUpMock = jest.fn();
    render(<TextField onKeyUp={onKeyUpMock} {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    fireEvent.keyUp(inputElement, { key: 'A', code: 'KeyA' });

    expect(onKeyUpMock).toHaveBeenCalledTimes(1);
  });

  test('handles onKeyDown event', () => {
    const onKeyDownMock = jest.fn();
    render(<TextField onKeyDown={onKeyDownMock} {...textFieldArgs} />);
    const inputElement = screen.getByPlaceholderText('Placeholder');

    fireEvent.keyDown(inputElement, { key: 'ArrowDown', code: 'ArrowDown' });

    expect(onKeyDownMock).toHaveBeenCalledTimes(1);
  });
});
