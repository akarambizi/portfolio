import { render, screen } from '@testing-library/react';
import { PageTitle } from './PageTitle';

describe('PageTitle', () => {
    beforeEach(() => {
        render(<PageTitle title="Test Title" />);
    });

    it('renders without content', () => {
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders the Bubbles component', () => {
        const bubbles = screen.getByTitle('bubbles');
        expect(bubbles).toBeInTheDocument();
    });
});
