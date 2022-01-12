import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import media from './media';
import colors from './variables/colors';
import fonts from './variables/fonts';
import sizes from './variables/sizes';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        font-size: ${sizes.sm};
        height: 100%;

        ${media.laptop} {
            font-size: ${sizes.base};
        }
    }

    body {
        height: 100%;
        width: 100%;
        color: ${colors.text};
        font-family: ${fonts.primary};
        background-color: ${colors.light};
        overflow: auto;
        word-wrap: break-word;

        #__next {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }


    a {
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 0px;
        line-height: 14px;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        display: inline-block;
        color: ${colors.dark};

        &:hover {
            color: ${colors.primaryHover};
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            a {
                font-size: 14px;
                letter-spacing: 0px;
                line-height: 14px;
                padding: 10px;
                text-decoration: none;
                transition: all 0.2s ease-in-out;
            }
        }
    }
`;

export default GlobalStyles;
