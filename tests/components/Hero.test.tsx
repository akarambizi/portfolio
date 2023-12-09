import { render, screen } from '@testing-library/react';
import { Hero } from '../../components';
import '@testing-library/jest-dom';

describe('Home', () => {
    test('renders learn react link', () => {
        render(<Hero />);
        const linkElement = screen.getByText(/I'm a software engineer with an interest in building the most effective websites possible./i);
        expect(linkElement).toBeInTheDocument();
    });
});
