// counter.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../counter';

describe('Counter Component', () => {
    test('renders the initial count value as 0', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value'); // Fixed
        expect(countValue).toHaveTextContent('0');
    });

    test('increments count when increment button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value'); // Fixed
        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);
        expect(countValue).toHaveTextContent('1');
    });

    test('decrements count when decrement button is clicked', () => {
        render(<Counter />);
        const countValue = screen.getByTestId('counter-value'); // Fixed
        const decrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(decrementButton);
        expect(countValue).toHaveTextContent('-1');
    });
});
``