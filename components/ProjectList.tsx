import React from 'react';
import Card from './Card';
import { Grid } from '../styles/elements';
import { sizes } from '../styles';

interface ProjectListProps {
    projects: any[];
    haslargeCard?: boolean;
    GridColumns?: number;
    marginBottom?: string;
}

export default function ProjectList({ projects, haslargeCard = false, GridColumns = 4, marginBottom = '0' }: ProjectListProps) {
    return (
        <Grid columns={GridColumns} gridGap={sizes.xxxxl} marginBottom={marginBottom}>
            {projects.map((project) => (
                <Card data={project} key={project.id} large={haslargeCard} />
            ))}
        </Grid>
    );
}
