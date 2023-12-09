import styled, { css } from 'styled-components';
import { colors, media, mixins, sizes } from '../../assets/styles';

export const StyledCard = styled.article`
    padding: ${sizes.xxs};
    border-radius: 8px;
    transition: all 0.2s ease;
    ${mixins.boxShadow}

    &:hover {
        ${mixins.boxShadowHover}
    }

    ul {
        ${mixins.flex}
        gap: 0 ${sizes.lg};
    }
`;

export const StyledCardImage = styled.a<{ large: boolean }>`
    position: relative;
    display: block;
    margin-bottom: ${sizes.base};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -3px;
        height: calc(100% - 4px);
        width: 100%;
        border: 3px solid ${colors.primary};
        border-radius: calc(${sizes.base} - 3px);
        opacity: 0;
        transition: opacity 0.2s ease-out;
        pointer-events: none;
        z-index: 0;
    }

    &:hover,
    &:focus {
        &::after {
            opacity: 1;
        }
    }

    img {
        display: block;
        width: 100%;
        height: 280px;
        border-radius: ${sizes.xs};
        cursor: pointer;
        object-fit: cover;

        ${({ large }) =>
        large &&
            css`
                height: 380px;
                ${media.laptop} {
                    height: 420px;
                }
            `};
    }
`;

export const StyledCardLinks = styled.div`
    ${mixins.flex}
    gap: 0 ${sizes.xxxxl};
    margin-bottom: ${sizes.xxs};

    a {
        svg,
        span {
            ${mixins.inlineBlock}
        }

        svg {
            width: ${sizes.lg};
            height: ${sizes.lg};
            margin-right: ${sizes.xs};
        }
    }
`;
