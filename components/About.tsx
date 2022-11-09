import AboutCard from './AboutCard';
import PageTitle from './PageTitle';
import ProjectList from './ProjectList';
import { AppContainer, Text } from '../styles/elements';
import { sizes } from '../styles';
import projects from '../assets/json/projects.json';

export default function About() {
    return (
        <AppContainer id="about">
            <PageTitle title="About Me." />
            <AboutCard />
            <div>
                <Text marginBottom={sizes.xxl} fontSize={sizes.xxl}>
                    Some Projects I Have Built:
                </Text>
                <ProjectList projects={projects.slice(0, 2)} GridColumns={2} haslargeCard />
            </div>
        </AppContainer>
    );
}
