import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
    test('renders the hero content', () => {
        render(<Hero />);
        const heroContent = screen.getByText(/I'm a software engineer with an interest in building the most effective websites possible./i);
        expect(heroContent).toBeInTheDocument();
    });
});
