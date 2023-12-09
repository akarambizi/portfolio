import { Card } from '../Card/Card';
import { Grid } from '../../assets/styles/elements';
import { sizes } from '../../assets/styles';
import { ProjectsListProps } from './Projects.types';

export function Projects({ projects, haslargeCard = false, GridColumns = 4, marginBottom = '0' }: ProjectsListProps) {
    return (
        <Grid columns={GridColumns} gridGap={sizes.xxxxl} marginBottom={marginBottom}>
            {projects.map((project) => (
                <Card data={project} key={project.id} large={haslargeCard} />
            ))}
        </Grid>
    );
}
