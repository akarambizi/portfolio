import styled from 'styled-components';
import { mixins, sizes } from '../../assets/styles';
import { Title } from '../../assets/styles/elements';

export const StyledPageTitle = styled.div`
    padding: ${sizes.xxl} 0 16px;

    ${Title} {
        position: relative;
        width: fit-content;
    }

    svg {
        position: absolute;
        top: -8px;
        right: -${sizes.base};
        height: ${sizes.xxxxl};
        width: ${sizes.xxxxl};
        z-index: -1;
        animation: ${mixins.floating} 5s infinite ease-in-out;
    }
`;
