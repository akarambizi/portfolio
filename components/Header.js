import styled from 'styled-components';
import Link from 'next/link';
import { mixins, media } from '../styles';
import { AppContainer } from '../styles/elements';

const StyledHeader = styled.header`
    width: 100%;
`;

const StyledHeaderWrapper = styled(AppContainer)`
    ${mixins.flexBetween}
    padding-top: 20px;
    padding-bottom: 20px;
    /* background-color: lightblue; */

    ul {
        ${mixins.flex}
    }
`;

const StyledLogo = styled.div`
    a {
        font-size: 18px;
        font-weight: bold;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <StyledHeaderWrapper>
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
            </StyledHeaderWrapper>
        </StyledHeader>
    );
}

export default Header;
