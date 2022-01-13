import React from 'react';
import  Card from './Card';
import projects from '../assets/json/projects.json';
import { Grid } from '../styles/elements';

export default function ProjectList() {
    return (
        <Grid columns="2" gridGap="36px">
            {projects.map((project) => (
            <Card data={project} key={project.id} large />
            ))}
        </Grid>
    );
}
