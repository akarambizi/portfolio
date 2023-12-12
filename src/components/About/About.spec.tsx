import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About', () => {
    beforeEach(() => {
        render(<About />);
    });

    it('renders About content', () => {
        expect(screen.getByText('About Me.')).toBeInTheDocument();
    });

    it('displays the AboutCard', () => {
        expect(screen.getByTestId('about-card')).toBeInTheDocument();
    });

    it('displays the correct number of projects', () => {
        const projects = screen.getAllByTestId('project-card');
        expect(projects).toHaveLength(2);
    });

    it('displays the view all button', () => {
        const button = screen.getByRole('button', { name: /View All/i });
        expect(button).toBeInTheDocument();
    });
});
