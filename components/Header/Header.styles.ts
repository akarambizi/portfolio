import styled from 'styled-components';
import { AppContainer } from '../../styles/elements';
import { mixins, sizes } from '../../styles';

export const StyledHeader = styled.header`
    width: 100%;
    padding: ${sizes.xl} 0;

    ${AppContainer} {
        ${mixins.flexBetween}

        ul {
            ${mixins.flex}
        }
    }
`;

export const StyledLogo = styled.div`
    a {
        font-size: ${sizes.xxl};
        font-weight: 700;
    }
`;
