import styled from 'styled-components';
import Link from 'next/link';
import { AppContainer } from '../styles/elements';


const StyledFooter = styled.footer`
    /* background-color: lightpink; */
`;
function Footer() {
    return (
        <StyledFooter>
            <AppContainer>
                <div>
                    <ul>
                        <li>
                            <Link href="mailto:arthurkarambizi@gmail.com" aria-label="Email">
                                Email
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/arthur-karambizi-7a0797143/" target="_blank" rel="noopener" aria-label="Linkedin">
                                Linkedin
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/arthurkarambizi" target="_blank" rel="noopener" aria-label="Github">
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>&copy; 2021. Designed and developed by Arthur Karambizi</p>
                </div>
            </AppContainer>
        </StyledFooter>
    );
}

export default Footer;
