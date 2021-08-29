import React from 'react';
import { Title, Button, Wrapper, Grid, Text, ColorBox } from '../styles/elements';

function StyleGuide() {
    return (
        <Wrapper>
            <Title centered>Style Guide</Title>
            <Grid>
                <div>
                    <Text bold>Typography</Text>
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
                        <Text bold>Colors</Text>
                        <span>Primary Color</span>
                        <Grid>
                            <ColorBox bg="primary-color"></ColorBox>
                            <ColorBox bg="primary-text-color"></ColorBox>
                            <ColorBox bg="primary-color-dark"></ColorBox>
                            <ColorBox bg="primary-color-light"></ColorBox>
                            <ColorBox bg="primary-color-text"></ColorBox>
                        </Grid>
                    </div>
                    <div>
                        <Text bold>Tertiary Color</Text>
                        <Grid>
                            <ColorBox bg="secondary-text-color"></ColorBox>
                            <ColorBox bg="secondary-text-color-light"></ColorBox>
                            <ColorBox bg="accent-color"></ColorBox>
                            <ColorBox bg="divider-color"></ColorBox>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <div>
                <Text bold>Buttons</Text>
                <Grid>
                    <Button>Normal</Button>
                    <Button secondary>
                        Outline
                    </Button>
                </Grid>
            </div>
        </Wrapper>
    );
}

export default StyleGuide;
