import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { ProjectsListProps } from './Projects.types';

const mockProjects: ProjectsListProps = {
    projects: [
        { id: '1', title: 'Project 1', image: 'image1.jpg', links: { live: 'live1.com', github: 'github1.com' }, tags: ['tag1', 'tag2'] },
        { id: '2', title: 'Project 2', image: 'image2.jpg', links: { live: 'live2.com', github: 'github2.com' }, tags: ['tag3', 'tag4'] },
    ],
};

describe('Projects', () => {
    it('renders Projects content', () => {
        render(<Projects {...mockProjects} />);
        expect(screen.getByText('Project 1')).toBeInTheDocument();
        expect(screen.getByText('Project 2')).toBeInTheDocument();
    });

    it('displays the correct number of cards', () => {
        render(<Projects {...mockProjects} />);
        const cards = screen.getAllByTestId('project-card');
        expect(cards).toHaveLength(mockProjects.projects.length);
    });
});
