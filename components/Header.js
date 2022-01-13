import styled from 'styled-components';
import Link from 'next/link';
import { mixins, sizes } from '../styles';
import { AppContainer } from '../styles/elements';

const StyledHeader = styled.header`
    width: 100%;
    padding: ${sizes.xl} 0;

    ${AppContainer} {
        ${mixins.flexBetween}

        ul {
            ${mixins.flex}
        }
    }
`;

const StyledLogo = styled.div`
    a {
        font-size: ${sizes.xxl};
        font-weight: 700;
    }
`;

function Header() {
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

export default Header;
