import styled from 'styled-components';
import { Bubbles, ShapeIcon } from '../assets/images';

import { AppContainer, Title, Text, Button, Grid } from '../styles/elements';
import { media, mixins, colors, sizes } from '../styles';

const StyledHero = styled.section`
    width: 100%;
    padding: 40px 0;
    box-sizing: border-box;

    ${media.mobile} {
        ${mixins.flex}
        height: calc(100vh - 74px);
    }

    ${AppContainer} {
        position: relative;
    }
`;

const StyledHeroContent = styled.div`
    width: 100%;
    position: relative;

    ${media.tablet} {
        width: 50%;
    }

    span {
        color: ${colors.primary};
    }

    svg {
        position: absolute;
        top: 0;
        right: 0;
        height: 100px;
        width: 100px;
        z-index: -1;
    }
`;
const StyledHeroShapeIcon = styled.div`
    display: none;

    ${media.tablet} {
        display: block;
        position: absolute;
        top: -50%;
        right: 0;
        overflow-x: hidden;
        animation: ${mixins.floating} 3s infinite ease-in-out;
        z-index: -2;
    }

    svg {
        position: relative;
        right: -50px;
        height: 600px;
        width: 600px;
    }
`;

function Hero() {
    return (
        <StyledHero>
            <AppContainer>
                <StyledHeroContent>
                    <Text>Hey,</Text>
                    <Title>
                        I’m <span>Arthur Karambizi.</span> a Software Engineer.
                    </Title>
                    <Text marginBottom={sizes.xxxxl}>
                        I am a software engineer with an interest in building the most effective websites possible. For over a year, I\'ve learned about the fundamentals of programming and web
                        development.
                    </Text>
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

export default Hero;
