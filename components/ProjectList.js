import React from 'react';
import { Grid } from '../styles/elements';
import projects from '../assets/json/projects.json';
import { Card } from '.';

export default function ProjectList() {
    return (
        <Grid columns="2" gridGap={'36px'}>
            {projects.map((project) => (
                <Card data={project} key={project.name} large />
            ))}
        </Grid>
    );
}
