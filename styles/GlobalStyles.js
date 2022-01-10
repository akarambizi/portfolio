import { createGlobalStyle } from 'styled-components';
// import arrowUrl from '../assets/images/icon-angle-down.svg';
// import colors from './colors';
// import fonts from './fonts';
import normalize from './normalize';
import media from './media';
import colors from './variables/colors';
import fonts from './variables/fonts';

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        font-size: 14px;

        ${media.laptop} {
            font-size: 16px;
        }
    }

    body {
        width: 100%;
        font-family: ${fonts.primary};
        color: ${colors.text};
        word-wrap: break-word;
        overflow: auto;
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
