import Head from 'next/head';
import styled from 'styled-components';
import { AppContainer } from '../styles/elements';
import { Header, Footer, ProjectList, PageTitle, ProjectsFilter } from '../components';
import projects from '../assets/json/projects.json';

const StyledProjects = styled.main`
    padding: 32px 0;
`;
function Projects() {
    return (
        <>
            <Head>
                <title>Project page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <StyledProjects>
                <AppContainer>
                    <PageTitle title="Projects." />
                    <ProjectsFilter />
                    <ProjectList projects={projects} GridColumns="3" />
                </AppContainer>
            </StyledProjects>
            <Footer />
        </>
    );
}

export default Projects;