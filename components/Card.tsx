// import Image from 'next/image';
import styled, { css } from 'styled-components';
import { GithubIcon, ExternalLink } from '../assets/images';
import { Text } from '../styles/elements';
import { media, mixins, sizes, colors } from '../styles';

const StyledCard = styled.article`
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

const StyledCardImage = styled.a<{ large: boolean }>`
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

type CardProps = {
    data: { title: string; image: string; links: { live: string; github: string }; tags: string[] };
    large?: boolean;
};

function Card({ data: { title, image, links, tags }, large = false }: CardProps) {
    return (
        <StyledCard>
            <StyledCardImage href={links.live} large={large}>
                <img src={image} alt={title} />
            </StyledCardImage>
            <div>
                <Text bold marginBottom="0">
                    {title}
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
