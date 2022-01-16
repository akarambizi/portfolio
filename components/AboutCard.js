import styled from 'styled-components';
import { EmailIcon, GithubIcon, LinkedinIcon } from '../assets/images';
import { sizes, mixins, media } from '../styles';
import { Text } from '../styles/elements';

const StyledAboutCard = styled.section`
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
                <Text bold md marginBottom="0">
                    Arthur Karambizi
                </Text>
                <Text marginBottom="0">Front End developer</Text>
                <Text>Hello My name is Arthur Karambizi. I love building websites And I also enjoy other activities like Soccer, music and art.</Text>

                <div>
                    <Text bold md marginBottom="0">
                        Tools:
                    </Text>
                    <ul>
                        <li>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <p>HTML</p>
                        </li>
                        <li>
                            <p>CSS</p>
                        </li>
                        <li>
                            <p>React.js</p>
                        </li>
                        <li>
                            <p>Vue.js</p>
                        </li>
                        <li>
                            <p>Node.js</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <Text bold md marginBottom="0">
                        My Interests:
                    </Text>
                    <ul>
                        <li>Sports</li>
                        <li>Music</li>
                        <li>Sciences</li>
                        <li>Technology</li>
                        <li>Travel</li>
                        <li>Nature</li>
                    </ul>
                </div>
                <div>
                    <Text bold md marginBottom="0">
                        Contact:
                    </Text>
                    <ul>
                        <li>
                            <a href="mailto:arthurkarambizi@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email link">
                                <EmailIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/arthur-karambizi-7a0797143/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin link">
                                <LinkedinIcon />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/arthurkarambizi" target="_blank" rel="noopener noreferrer" aria-label="Github link">
                                <GithubIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledAboutCard>
    );
}
