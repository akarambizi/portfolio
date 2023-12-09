import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About', () => {
    it('renders About content', () => {
        render(<About />);
        expect(screen.getByText('About Me.')).toBeInTheDocument();
    });

    it('displays the AboutCard', () => {
        render(<About />);
        expect(screen.getByTestId('about-card')).toBeInTheDocument();
    });

    it('displays the correct number of projects', () => {
        render(<About />);
        const projects = screen.getAllByTestId('project-card');
        expect(projects).toHaveLength(2);
    });

    it('displays the view all button', () => {
        render(<About />);
        const button = screen.getByRole('button', { name: /View All/i });
        expect(button).toBeInTheDocument();
    });
});
