import styled from 'styled-components';
import { Bubbles, ShapeIcon } from '../assets/images';

import { AppContainer, Title, Text, Button, Grid } from '../styles/elements';
import { media, mixins, colors, sizes } from '../styles';

const StyledHero = styled.section`
    width: 100%;
    padding: ${sizes.xxxxl} 0;
    box-sizing: border-box;
    margin-bottom: ${sizes.xxxxl};

    ${media.mobile} {
        ${mixins.flex}
        min-height: calc(100vh - 110px);
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

    h1 span {
        color: ${colors.primary};
    }

    svg {
        position: absolute;
        top: 0;
        right: 0;
        height: 100px;
        width: 100px;
        z-index: -1;
        animation: ${mixins.floating} 5s infinite ease-in-out;
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
                    <Text as="span">Hey,</Text>
                    <Title>
                        I’m <span>Arthur Karambizi.</span> a Software Engineer.
                    </Title>
                    <Text marginBottom={sizes.xxxxl}>
                        I am a software engineer with an interest in building the most effective websites possible. For over a year, I&#39;ve learned about the fundamentals of programming and web
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
