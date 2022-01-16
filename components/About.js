import AboutCard from './AboutCard';
import PageTitle from './PageTitle';
import ProjectList from './ProjectList';
import { AppContainer, Button, Text } from '../styles/elements';
import { sizes } from '../styles';
import projects from '../assets/json/projects.json';

export default function About() {
    return (
        <AppContainer id="about">
            <article>
                <PageTitle title="About Me." />
                <AboutCard />
                <Text fontSize={sizes.xxl}>Some Projects I Have Built:</Text>
                <ProjectList projects={projects.slice(0, 3)} GridColumns="3" />
                <Button>View All Projects</Button>
            </article>
        </AppContainer>
    );
}
