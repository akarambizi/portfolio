// import Image from 'next/image';
import styled, { css } from 'styled-components';
import { GithubIcon, ExternalLink } from '../assets/images';
import { Text } from '../styles/elements';
import { media, mixins, sizes, colors } from '../styles';

const StyledCard = styled.article`
    padding: ${sizes.xxs};
    border-radius: 8px;
    transition: all .2s ease;
    ${mixins.boxShadow}

    &:hover {
        ${mixins.boxShadowHover}
    }

    ul {
        ${mixins.flex}
        gap: 0 ${sizes.xl};
    }
`;

const StyledCardImage = styled.a`
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
        height: 380px;
        border-radius: ${sizes.xs};
        cursor: pointer;
        object-fit: cover;

        ${({ large }) => (
        large &&
                css`
                    ${media.laptop} {
                        height: 520px;
                    }
                `
    )};
    }
`;

const StyledCardLinks = styled.div`
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

function Card({ data: { name, image, links, tags }, large }) {
    return (
        <StyledCard>
            <StyledCardImage large={large}>
                <img src={image} alt={name} layout="fill" />
            </StyledCardImage>
            <div>
                <Text bold md marginBottom="0">
                    {name}
                </Text>
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Text fontSize={sizes.xs}>{tag}</Text>
                        </li>
                    ))}
                </ul>
                <StyledCardLinks>
                    <a href={links.github}>
                        <GithubIcon />
                        <span>Code</span>
                    </a>
                    <a href={links.live}>
                        <ExternalLink />
                        <span>Live Preview</span>
                    </a>
                </StyledCardLinks>
            </div>
        </StyledCard>
    );
}

export default Card;
