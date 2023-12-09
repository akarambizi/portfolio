import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
    it('renders header content', () => {
        render(<Header />);
        expect(screen.getByText('Ak')).toBeInTheDocument();
    });

    it('displays the correct links', () => {
        render(<Header />);
        const aboutLink = screen.getByRole('link', { name: /About/i });
        const projectsLink = screen.getByRole('link', { name: /Projects/i });
        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(projectsLink).toHaveAttribute('href', '/projects');
    });
});
