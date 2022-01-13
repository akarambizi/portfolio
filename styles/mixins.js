import { css, keyframes } from 'styled-components';
import colors from './variables/colors';
import fonts from './variables/fonts';
import sizes from './variables/sizes';

const mixins = {
    flex: css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    `,
    flexCenter: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `,
    flexBetween: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    `,
    flexColumn: css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    `,
    flexColumnCenter: css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    `,
    flexAlignCenter: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    grid: css`
        display: grid;
        align-items: center;
    `,

    inlineBlock: css`
        display: inline-block;
        vertical-align: middle;
    `,

    positionFixed: css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 100;
    `,

    positionAbsolute: css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
    `,
    positionBottom: css`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    `,
    button: css`
        display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};
        width: ${({ width }) => width};
        min-width: 142px;
        padding: ${sizes.sm} ${sizes.xl};
        border: 2px solid ${colors.primary};
        border-radius: calc(${sizes.xs} / 2);
        color: ${({ secondary }) => (secondary ? colors.secondary : colors.white)};
        background: ${({ secondary }) => (secondary ? colors.secondaryActive : colors.primary)};
        font-size: ${sizes.base};
        text-align: center;
        text-transform: capitalize;
        line-height: ${sizes.base};
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            border: 2px solid ${colors.primaryHover};
            background: ${colors.primaryHover};
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        }
    `,
    boxShadow: css`
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    `,
    boxShadowHover: css`
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    `,
    floating: keyframes`
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 10px); }
        100%   { transform: translate(0, -0px); }
    `
};

export default mixins;
