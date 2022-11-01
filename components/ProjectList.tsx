import React from 'react';
import Card from './Card';
import { Grid } from '../styles/elements';
import { sizes } from '../styles';

export default function ProjectList({ projects, haslargeCard, GridColumns }) {
    return (
        <Grid columns={GridColumns} gridGap={sizes.xxxxl}>
            {projects.map((project) => (
                <Card data={project} key={project.id} large={haslargeCard} />
            ))}
        </Grid>
    );
}
