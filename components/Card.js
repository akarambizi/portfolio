import Image from 'next/image';
import styled from 'styled-components';
import { GithubIcon, ExternalLink } from '../assets/images';
import { Text } from '../styles/elements';
import { media, mixins } from '../styles';

const StyledCard = styled.article`
    padding-bottom: 20px;

    ul {
        ${mixins.flex}
        gap: 0 20px;
    }
`;

const StyledCardImage = styled.a`
    position: relative;
    display: block;
    margin-bottom: 15px;

    ${media.laptop} {
        margin-bottom: 20px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -3px;
        height: calc(100% - 4px);
        width: 100%;
        border: 3px solid var(--primary-color);
        border-radius: 27px;
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
        height: ${({ large }) => (large ? '620px' : '380px')};
        border-radius: 25px;
        cursor: pointer;
        object-fit: cover;
    }
`;

const StyledCardLinks = styled.div`
    ${mixins.flex}
    gap: 0 50px;
    margin-bottom: 10px;

    a {
       // color: var(--primary-text-color);

        &:hover {
           // color: var(--primary-color);
        }

        svg,
        span {
            ${mixins.inlineBlock}
        }

        svg {
            width: 18px;
            height: 18px;
            margin-right: 12px;
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
                <Text bold md>
                    {name}
                </Text>
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
                <ul>
                    {tags.map((tag) => (
                        <li key={tag}>
                            <Text>{tag}</Text>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledCard>
    );
}

export default Card;
