import styled from 'styled-components';
import { colors, mixins, sizes } from '../../styles';
import { AppContainer } from '../../styles/elements';

export const StyledFooter = styled.footer`
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
