import styled from 'styled-components';
import { Bubbles, ShapeIcon } from '../../assets/images';
import { AppContainer, Title, Text, Button } from '../../assets/styles/elements';
import { media, mixins, colors, sizes } from '../../assets/styles';
import { StyledHero, StyledHeroContent, StyledHeroShapeIcon } from './Hero.styles';

export function Hero() {
    return (
        <StyledHero>
            <AppContainer>
                <StyledHeroContent>
                    <Title>
                        I’m <span>Arthur Karambizi.</span> a Software Engineer.
                    </Title>
                    <Text marginBottom={sizes.xxl}>I&apos;m a software engineer with an interest in building the most effective websites possible.</Text>
                    <Button secondary>Projects</Button>
                    <Bubbles />
                </StyledHeroContent>
                <StyledHeroShapeIcon>
                    <ShapeIcon />
                </StyledHeroShapeIcon>
            </AppContainer>
        </StyledHero>
    );
}
