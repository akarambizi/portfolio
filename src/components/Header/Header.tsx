import Link from 'next/link';
import { AppContainer } from '../../styles/elements';
import { StyledHeader, StyledLogo } from './Header.styles';

export function Header() {
    return (
        <StyledHeader>
            <AppContainer>
                <StyledLogo>
                    <Link href="/">Ak</Link>
                </StyledLogo>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </AppContainer>
        </StyledHeader>
    );
}
