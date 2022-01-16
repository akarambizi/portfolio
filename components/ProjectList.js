import React from 'react';
import Card from './Card';
import { Grid } from '../styles/elements';

export default function ProjectList({ projects, haslargeCard, GridColumns }) {
    return (
        <Grid columns={GridColumns} gridGap="36px">
            {projects.map((project) => (
                <Card data={project} key={project.id} large={haslargeCard} />
            ))}
        </Grid>
    );
}
