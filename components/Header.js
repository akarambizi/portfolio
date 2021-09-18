import styled from 'styled-components';
import Link from 'next/link';
import { mixins, media } from '../styles';
import { StyledWrapper } from '../styles/elements';

const StyledHeader = styled.header`
    width: 100%;
`;

const StyledHeaderWrapper = styled(StyledWrapper)`
    padding: 20px;
    background-color: lightblue;

    ${mixins.flexBetween}
    ul {
        ${mixins.flex}
    }
`;

function Header() {
    return (
        <StyledHeader>
            <StyledHeaderWrapper>
                <Link href="/">Ak</Link>
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
