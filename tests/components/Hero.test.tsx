import { render, screen } from '@testing-library/react';
import { Hero } from '../../components';
import '@testing-library/jest-dom';

describe('Home', () => {
    test('renders learn react link', () => {
        render(<Hero />);
        const linkElement = screen.getByText(/I'm a software engineer with an interest in building the most effective websites possible. For over a year, I've learned about the fundamentals of programming and web development./i);
        expect(linkElement).toBeInTheDocument();
    });
});
