import { css, keyframes } from 'styled-components';

const mixins = {
    flex: css`
        display: flex;
        align-items: center;
        gap: 30px;
    `,

    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,

    flexColumn: css`
        display: flex;
        flex-direction: column;
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

    button: css`
        display: ${({ inlineBlock }) => (inlineBlock ? 'inline-block' : 'block')};
        border: 2px solid var(--primary-color);
        padding: 14px 20px;
        width: ${({ width }) => width};
        min-width: 142px;
        border-radius: 5px;
        color: ${({ secondary }) => (secondary ? 'var(--primary-text-color)' : 'var(--primary-color-text)')};
        background: ${({ secondary }) => (secondary ? 'var(--primary-color-text)' : 'var(--primary-color)')};
        cursor: pointer;
        font-size: var(--font-size-sm);
        line-height: 16px;
        text-transform: capitalize;
        text-align: center;
        transition: all 0.3s ease;

        &:hover {
            background: var(--primary-color-light);
            border: 2px solid var(--primary-color-light);
            color: var(--primary-text-color);
        }
    `,

    boxShadow: css`
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    `
};

export default mixins;
