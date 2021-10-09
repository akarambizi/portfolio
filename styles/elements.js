import styled from 'styled-components';
import { media } from '.';
import mixins from './mixins';

export const StyledWrapper = styled.div`
    /* min-width: 100%; */
    padding: 0 20px;
    max-width: 1225px;
    margin: 0 auto;
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    display: grid;
    align-items: center;
    gap: 0 30px;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    /* horizontal-card */
    /* grid-template-columns: 1fr 1fr; */
    padding: ${({ spacing }) => spacing && '10px 0'};

    ${media.laptop} {
        padding: ${({ spacing }) => spacing && '40px 0'};
        ${({ transition }) => transition && mixins.opacityAnimation}
    }
`;

const titles = {
    h1: {
        'font-size': 'var(--font-size-xxl)',
        'line-height': '46px',
        'font-weight': '600'
    },
    h2: {
        'font-size': 'var(--font-size-xl)',
        'line-height': '28px',
        'font-weight': '600'
    },
    h3: {
        'font-size': 'var(--font-size-lg)',
        'line-height': '24px',
        'font-weight': '500'
    },
    h4: {
        'font-size': 'var(--font-size-md)',
        'line-height': '22px',
        'font-weight': '500'
    }
};

export const Title = styled.h1`
    ${({ as: tag }) => (tag in titles ? titles[tag] : titles['h1'])};
    margin-bottom: ${({ marginBottom }) => marginBottom || '10px'};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    letter-spacing: 0;
    text-align: ${({ centered }) => centered && 'center'};
`;

export const Text = styled.p`
    display: ${({ display }) => display};
    margin-bottom: 10px;
    width: ${({ width }) => width};
    color: ${({ secondary }) => (secondary ? 'var(--primary-color)' : 'var(--primary-text-color)')};
    font-size: ${({ md }) => (md ? 'var(--font-size-md)' : 'var(--font-size-text)')};
    font-weight: ${({ bold }) => bold && '600'};
    line-height: 28px;

    ${({ heading, fullWidth, centered, marginBottom, sm }) => {
        return (
            heading &&
            `
            margin-bottom: 18px;
            margin-bottom: ${marginBottom};
            width: ${fullWidth && '100%'};
            text-align: ${centered && 'center'};
            font-size: ${sm ? '14px' : '18px'};
            font-weight: 700;
            line-height: 34px;

            ${media.laptop} {
                font-size: ${sm ? '18px' : '24px'};
            }
            `
        );
    }};
`;

export const Anchor = styled.a`
    display: block;
    text-transform: capitalize;
`;

export const Button = styled.button`
    ${mixins.button}
`;

export const List = styled.ul`
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    font-size: 14px;
    letter-spacing: 0;
    line-height: 26px;

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

export const Tabs = styled.div`
    ${mixins.flex}
    margin: 0 20px 32px;
    margin-bottom: ${({ marginBottom }) => marginBottom && '20px'};
    border-bottom: 0.125rem solid #d8d8d8;
    /* width: 100%; */
    box-sizing: border-box;

    ${media.laptop} {
        margin: ${({ centered }) => centered && '0 auto'};
        max-width: 1240px;
    }
`;

export const Tab = styled.button`
    width: 100%;
    border: none;
    border-bottom: ${({ active }) => active && '4px solid #0d9b6e'};
    padding: ${({ active }) => (active ? '6px 10px' : '8px 10px')};
    color: #0f2524;
    background-color: transparent;
    font-size: 12px;
    font-weight: 800;
    line-height: 18px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: border-bottom 0.2s ease;

    ${media.laptop} {
        padding: ${({ active }) => (active ? '6px 18px' : '8px 18px')};
        font-size: 14px;
    }
`;

export const ColorBox = styled.div`
    height: 90px;
    background: ${({ bg }) => `var(--${bg})`};
    border-radius: 15px;
`;
