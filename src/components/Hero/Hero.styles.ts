import styled from 'styled-components';
import { AppContainer } from '../../styles/elements';
import { media, mixins, colors, sizes } from '../../styles';

export const StyledHero = styled.section`
    ${mixins.flex}
    width: 100%;
    margin-bottom: ${sizes.xxxxl};
    padding: ${sizes.xxxxl} 0;
    box-sizing: border-box;

    ${AppContainer} {
        position: relative;
    }
`;

export const StyledHeroContent = styled.div`
    width: 100%;
    position: relative;

    ${media.tablet} {
        width: 50%;
    }

    h1 span {
        color: ${colors.primary};
    }

    svg {
        position: absolute;
        top: -20px;
        right: 0;
        height: 100px;
        width: 100px;
        z-index: -1;
        animation: ${mixins.floating} 5s infinite ease-in-out;
    }
`;

export const StyledHeroShapeIcon = styled.div`
    display: none;

    ${media.tablet} {
        display: block;
        position: absolute;
        top: -100%;
        right: 0;
        overflow-x: hidden;
        animation: ${mixins.floating} 3s infinite ease-in-out;
        z-index: -2;
    }

    svg {
        position: relative;
        right: -50px;
        height: 600px;
        width: 600px;
    }
`;
