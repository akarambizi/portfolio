import Link from 'next/link';
import projectsList from '../../assets/json/projects.json';
import { colors, mixins, sizes } from '../../assets/styles';
import { AppContainer, Button, Text } from '../../assets/styles/elements';
import { PageTitle } from '../PageTitle/PageTitle';
import { Projects } from '../Projects/Projects';
import { AboutCard } from './AboutCard';

export function About() {
    return (
        <AppContainer id="about">
            <PageTitle title="About Me." />
            <AboutCard />
            <div>
                <Text marginBottom={sizes.xxl} fontSize={sizes.xxl}>
                    Some Projects I Have Built:
                </Text>
                <Projects projects={projectsList.slice(0, 2)} GridColumns={2} haslargeCard marginBottom={sizes.xxl} />
                <Link href="/projects" scroll style={{ color: colors.primary }}>
                    View All
                </Link>
            </div>
        </AppContainer>
    );
}
