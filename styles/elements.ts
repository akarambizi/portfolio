import styled, { css } from 'styled-components';
import { media } from '.';
import mixins from './mixins';
import sizes from './variables/sizes';

export const AppContainer = styled.div`
    /* min-width: 100%; */
    padding: 0 ${sizes.xl};
    max-width: 1110px;
    margin: 0 auto;
`;

export const Grid = styled.section<{ gridGap?: string; padding?: string; marginBottom?: string; transition?: string; columns?: number }>`
    /* align-items: center; */
    display: grid;
    gap: ${({ gridGap }) => gridGap || `0 ${sizes.xxxl}`};
    padding: ${({ padding }) => padding && `${sizes.xs} 0`};
    margin-bottom: ${({ marginBottom }) => marginBottom || `0`};

    ${media.laptop} {
        padding: ${({ padding }) => padding && `${sizes.xxxxl} 0`};
        ${({ transition }) => transition}
    }

    ${({ columns }) => {
        const size = columns ? 1110 / columns - 30 : 240;
        const minsize = `min(${size}px, 100%)`;
        return css`
            grid-template-columns: repeat(auto-fit, minmax(${minsize}, 1fr));
        `;
    }};
`;

export const Title = styled.h1<{ fullWidth?: boolean; marginBottom?: string; centered?: boolean; fontSize?: string; fontWeight?: string; lineHeight?: string }>`
    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-bottom: ${({ marginBottom }) => marginBottom || sizes.xs};
    letter-spacing: 0;
    text-align: ${({ centered }) => centered && 'center'};
    font-size: ${({ fontSize }) => fontSize || sizes.xxxl};
    font-weight: ${({ fontWeight }) => fontWeight || '600'};
    line-height: ${({ lineHeight }) => lineHeight || '46px'};
`;

export const Text = styled.p<{ display?: string; width?: string; marginBottom?: string; textColor?: string; fontSize?: string; bold?: boolean; heading?: string; fullWidth?: string; centered?: string; small?: string }>`
    display: ${({ display }) => display};
    width: ${({ width }) => width};
    margin-bottom: ${({ marginBottom }) => marginBottom || sizes.xxxs};
    color: ${({ textColor }) => textColor && textColor};
    font-size: ${({ fontSize }) => fontSize || sizes.base};
    font-weight: ${({ bold }) => bold && '600'};
    line-height: ${sizes.xxxl};

    ${({ heading, fullWidth, centered, marginBottom, small }) =>
        heading &&
        css`
            width: ${fullWidth && '100%'};
            margin-bottom: ${marginBottom || sizes.lg};
            font-size: ${small ? sizes.sm : sizes.lg};
            font-weight: 700;
            text-align: ${centered && 'center'};
            line-height: ${sizes.xxxxl};

            ${media.laptop} {
                font-size: ${small ? sizes.lg : sizes.xxl};
            }
        `};
`;

export const Anchor = styled.a`
    display: block;
    text-transform: capitalize;
`;

export const Button = styled.button<{ secondary?: boolean }>`
    ${mixins.button}
`;

export const List = styled.ul`
    margin-bottom: ${sizes.xl};
`;

export const ListItem = styled.li`
    font-size: ${sizes.sm};
    letter-spacing: 0;
    line-height: ${sizes.xxl};

    &::before {
        ${mixins.inlineBlock}
        content: '';
        height: 6px;
        width: 6px;
        margin-right: 7px;
        border-radius: 50%;
        background-color: var(--primary-color);
    }
`;

export const ColorBox = styled.div<{ bg: string }>`
    height: 90px;
    border-radius: ${sizes.base};
`;
