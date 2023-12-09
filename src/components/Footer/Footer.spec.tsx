import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    it('renders footer content', () => {
        render(<Footer />);
        expect(screen.getByText('© 2021. Arthur Karambizi')).toBeInTheDocument();
    });

    it('displays the correct links', () => {
        render(<Footer />);
        const linkedinLink = screen.getByRole('link', { name: /Linkedin/i });
        const githubLink = screen.getByRole('link', { name: /Github/i });
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/arthur-karambizi-7a0797143/');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/arthurkarambizi');
    });
});
