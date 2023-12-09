import { GithubIcon, LinkedinIcon } from '../../assets/images';
import { sizes } from '../../assets/styles';
import { AppContainer, Text } from '../../assets/styles/elements';
import { StyledFooter } from './Footer.styles';

export function Footer() {
    return (
        <StyledFooter>
            <AppContainer>
                <ul>
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
