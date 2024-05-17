import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    it('renders footer content', () => {
        const textFooter = `© ${new Date().getFullYear()}. Arthur Karambizi`;
        const getContent = screen.getByText(textFooter);

        expect(getContent).toBeInTheDocument();
    });

    it('displays the correct links', () => {
        const linkedinLink = screen.getByRole('link', { name: /Linkedin/i });
        const githubLink = screen.getByRole('link', { name: /Github/i });
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/arthur-karambizi-7a0797143/');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/arthurkarambizi');
    });
});
