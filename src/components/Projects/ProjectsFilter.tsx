import projects from '../../../assets/json/projects.json';
import { Button, Grid } from '../../styles/elements';

export function ProjectsFilter() {
    const projectsTags = projects.map((project) => project.tags);
    const flattened = projectsTags.flat();
    const filters = [...new Set(flattened)];

    return (
        <section>
            <Grid>
                <Button type="button">ALL</Button>
                {filters.map((filter) => (
                    <Button type="button" key={filter}>
                        {filter}
                    </Button>
                ))}
            </Grid>
        </section>
    );
}
