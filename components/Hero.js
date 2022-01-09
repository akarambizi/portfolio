import styled from 'styled-components';
import { media, mixins } from '../styles';
import { AppContainer, Title, Text } from '../styles/elements';

const StyledHero = styled.section`
    /* background-color: green; */
    width: 100%;
    padding: 40px 0;
    box-sizing: border-box;

    ${media.mobile} {
        height: calc(100vh - 74px);
        ${mixins.flexColumnCenter}
    }
`;

const StyledHeroContent = styled.div`
    width: 100%;
    /* background: violet; */
    /* width: 100%; */

    ${media.laptop} {
        width: 50%;
    }

    .name {
        color: lightcoral;
    }
`;

function Hero() {
    return (
        <StyledHero>
            <AppContainer>
                <StyledHeroContent>
                    <Text>Hey,</Text>
                    <Title>
                        I’m <span className="name">Arthur Karambizi.</span> a Software Engineer.
                    </Title>
                    <Text>
                        {
                            "I am a software engineer with an interest in building the most effective websites possible. For over a year, I've learned about the fundamentals of programming and web development."
                        }
                    </Text>
                </StyledHeroContent>
            </AppContainer>
        </StyledHero>
    );
}

export default Hero;
