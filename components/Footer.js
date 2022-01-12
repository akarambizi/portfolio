import styled from 'styled-components';
import { AppContainer, Text } from '../styles/elements';
import { EmailIcon, GithubIcon, LinkedinIcon } from '../assets/images';
import { colors, mixins, sizes } from '../styles';

const StyledFooter = styled.footer`
    text-align: center;

    ${AppContainer} {
        padding: ${sizes.xxxxl} 0;
        border-top: 1px solid ${colors.primaryActive};
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
function Footer() {
    return (
        <StyledFooter>
            <AppContainer>
                <ul>
                    <li>
                        <a href="mailto:arthurkarambizi@gmail.com" aria-label="Email" rel="noreferrer">
                            <EmailIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/arthur-karambizi-7a0797143/" target="_blank" rel="noreferrer" aria-label="Linkedin">
                            <LinkedinIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/arthurkarambizi" target="_blank" rel="noreferrer" aria-label="Github">
                            <GithubIcon />
                        </a>
                    </li>
                </ul>
                <div>
                    <Text fontSize={sizes.sm}>&copy; 2021. Arthur Karambizi</Text>
                </div>
            </AppContainer>
        </StyledFooter>
    );
}

export default Footer;
