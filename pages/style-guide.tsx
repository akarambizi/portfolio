import projects from '../assets/json/projects.json';
import { Card } from '../src/components';
import { AppContainer, Button, ColorBox, Grid, Text, Title } from '../src/styles/elements';

function StyleGuide() {
    return (
        <AppContainer>
            <section>
                <Title centered>Style Guide</Title>
                <Grid>
                    <div>
                        <Text bold>Typography</Text>
                        <span>Poppins</span>
                        <Title>Heading 1</Title>
                        <Title as="h2">Heading 2</Title>
                        <Title as="h3">Heading 3</Title>
                        <Title as="h4">Heading 4</Title>
                        <Text>Body text</Text>
                        <Text>Text text</Text>
                    </div>
                    <div>
                        <div>
                            <Text bold>Colors</Text>
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
                            <Text bold>Tertiary Color</Text>
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
                    <Text bold>Buttons</Text>
                    <Grid>
                        <Button>Normal</Button>
                        <Button secondary>Outline</Button>
                    </Grid>
                </div>
            </section>
            <section>
                <Title centered marginBottom="20px">
                    Components
                </Title>
                <Grid columns={2}>
                    {projects.map((project) => (
                        <Card data={project} key={project.title} large />
                    ))}
                </Grid>
            </section>
        </AppContainer>
    );
}

export default StyleGuide;
