import { render, screen } from '@testing-library/react';
import { ProjectsFilter } from './ProjectsFilter';

jest.mock('../../assets/json/projects.json', () => [
    { id: '1', title: 'Project 1', image: 'image1.jpg', links: { live: 'live1.com', github: 'github1.com' }, tags: ['tag1', 'tag2'] },
    { id: '2', title: 'Project 2', image: 'image2.jpg', links: { live: 'live2.com', github: 'github2.com' }, tags: ['tag3', 'tag4'] },
]);

describe('ProjectsFilter', () => {
    it('renders project filter content', () => {
        render(<ProjectsFilter />);
        expect(screen.getByText('ALL')).toBeInTheDocument();
    });

    it('displays the correct number of filter buttons', () => {
        render(<ProjectsFilter />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(5); // 4 unique tags + 1 ALL button
    });
});
