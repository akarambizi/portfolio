import styled from 'styled-components';
import { sizes, mixins, media } from '../../assets/styles';

export const StyledAboutCard = styled.section`
    margin-bottom: ${sizes.xxxxl};

    ${media.tablet} {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        grid-gap: 0 50px;
    }

    img {
        display: block;
        width: 100%;
        height: 380px;
        border-radius: ${sizes.xs};
        cursor: pointer;
        object-fit: cover;
        margin-bottom: ${sizes.lg};
    }

    div {
        width: 100%;
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

export const StyledAboutList = styled.div`
    margin-bottom: ${sizes.xxs};
`;
