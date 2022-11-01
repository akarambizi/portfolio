import styled from 'styled-components';
import AboutList from './AboutList';
import { sizes, mixins, media } from '../styles';
import { Text } from '../styles/elements';
import about from '../assets/json/about.json';

const StyledAboutCard = styled.section`
    margin-bottom: ${sizes.xxxxl};

    ${media.tablet} {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        grid-gap: 0 50px;
    }

    img {
        display: block;
        width: 100%;
        height: 380px;
        border-radius: ${sizes.xs};
        cursor: pointer;
        object-fit: cover;
        margin-bottom: ${sizes.lg};
    }

    div {
        width: 100%;
    }

    ul {
        li {
            ${mixins.inlineBlock}
            margin-right: ${sizes.xxxs};
        }

        svg {
            height: ${sizes.xl};
            width: ${sizes.xl};
        }
    }
`;
export default function AboutCard() {
    return (
        <StyledAboutCard>
            <img src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Arthur Karambizi" />
            <div>
                <Text bold marginBottom="0" fontSize="18px">
                    Arthur Karambizi
                </Text>
                <Text marginBottom="16px" fontSize="14px">
                    Front End developer
                </Text>
                <Text>Hello My name is Arthur Karambizi. I love building websites And I also enjoy other activities like Soccer, music and art.</Text>

                <AboutList title=" Languages" list={about.languages} />
                <AboutList title="Tools" list={about.tools} />
                <AboutList title=" Design" list={about.design} />
                <AboutList title=" My Interests" list={about.interests} />
            </div>
        </StyledAboutCard>
    );
}
