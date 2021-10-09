import styled from 'styled-components';
import { media, mixins } from '../styles';
import { StyledWrapper, Title, Text } from '../styles/elements';

const StyledHero = styled.section`
    /* background-color: lightcyan; */
    /* width: 100%; */
`;

const StyledHeroContent = styled.div`
    /* width: 100%; */
    /* min-height: calc(100vh - 74px); */

    /* ${mixins.flexCenterColumns} */

    /* ${media.tablet} {
        width: 540px;
    } */

    /* .name {
        color: lightcoral;
    } */
`;

function Hero() {
    return (
        <StyledHero>
            <StyledWrapper>
                {/* <StyledHeroContent> */}
                    <Text>Hey,</Text>
                    <Title>
                        I’m <span className="name">Arthur Karambizi.</span> a Software Engineer.
                    </Title>
                    <Text>
                        {
                            "I am a software engineer with an interest in building the most effective websites possible. For over a year, I've learned about the fundamentals of programming and web development."
                        }
                    </Text>
                {/* </StyledHeroContent> */}
            </StyledWrapper>
        </StyledHero>
    );
}

export default Hero;
