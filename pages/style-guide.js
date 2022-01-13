import { Title, Button, AppContainer, Grid, Text, ColorBox } from '../styles/elements';
import projects from '../assets/json/projects.json';
import Card from '../components/Card';

function StyleGuide() {
    return (
        <AppContainer>
            <section>
                <Title centered="true">Style Guide</Title>
                <Grid>
                    <div>
                        <Text bold="true">Typography</Text>
                        <span>Poppins</span>
                        <Title>Heading 1</Title>
                        <Title as="h2">Heading 2</Title>
                        <Title as="h3">Heading 3</Title>
                        <Title as="h4">Heading 4</Title>
                        <Text md>Body text</Text>
                        <Text>Text text</Text>
                    </div>
                    <div>
                        <div>
                            <Text bold="true">Colors</Text>
                            <span>Primary Color</span>
                            <Grid>
                                <ColorBox bg="primary-color" />
                                <ColorBox bg="primary-text-color" />
                                <ColorBox bg="primary-color-dark" />
                                <ColorBox bg="primary-color-light" />
                                <ColorBox bg="primary-color-text" />
                            </Grid>
                        </div>
                        <div>
                            <Text bold="true">Tertiary Color</Text>
                            <Grid>
                                <ColorBox bg="secondary-text-color" />
                                <ColorBox bg="secondary-text-color-light" />
                                <ColorBox bg="accent-color" />
                                <ColorBox bg="divider-color" />
                            </Grid>
                        </div>
                    </div>
                </Grid>
                <div>
                    <Text bold="true">Buttons</Text>
                    <Grid>
                        <Button>Normal</Button>
                        <Button secondary="true">Outline</Button>
                    </Grid>
                </div>
            </section>
            <section>
                <Title centered="true" marginBottom="20px">Components</Title>
                <Grid columns="2">
                    {projects.map((project) => (
                        <Card data={project} key={project.name} large />
                    ))}
                </Grid>
            </section>
        </AppContainer>
    );
}

export default StyleGuide;
