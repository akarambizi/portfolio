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
        scroll-behavior: smooth;

        /* CSS Custom Properties for colors */
        --background: ${colors.background};
        --background-secondary: ${colors.backgroundSecondary};
        --surface: ${colors.surface};
        --primary: ${colors.primary};
        --primary-light: ${colors.primaryLight};
        --text: ${colors.text};
        --text-secondary: ${colors.textSecondary};
        --text-muted: ${colors.textMuted};
        --spotlight: ${colors.spotlight};

        ${media.laptop} {
            font-size: ${sizes.base};
        }
    }

    * {
        box-sizing: border-box;
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        height: 100%;
        width: 100%;
        color: ${colors.text};
        font-family: ${fonts.primary};
        background: ${colors.background};
        background-attachment: fixed;
        overflow-x: hidden;
        word-wrap: break-word;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;

        /* Animated background particles */
        &::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:
                radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(187, 134, 252, 0.05) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
            animation: float 20s ease-in-out infinite;
        }

        #__next {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100vh;
            position: relative;
        }
    }

    @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        33% { transform: translate(30px, -30px) rotate(120deg); }
        66% { transform: translate(-20px, 20px) rotate(240deg); }
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${colors.lightGray};
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${colors.primaryHover};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure {
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
