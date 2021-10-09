import Image from 'next/image';
import styled from 'styled-components';
import { Text } from '../styles/elements';

const StyledCardImageLink = styled.a`
    display: block;
    position: relative;

    &:hover,
    &:focus {
        &::after {
            opacity: 1;
        }
    }

    &::after {
        border-radius: 27px;
        border: 3px solid var(--primary-color);
        content: '';
        height: 100%;
        left: -3px;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: -3px;
        transition: opacity 0.2s ease-out;
        width: 100%;
        z-index: 0;
    }

    img {
        border-radius: 25px;
        display: block;
        height: 100%;
        object-fit: cover;
        max-height: 380px;
        margin: 0 auto;
        position: relative;
        width: 100%;
        cursor: pointer;
    }
`;
function Card({ data: { name, image, links, tags } }) {
    return (
        <article>
            <StyledCardImageLink>
                <img src={image} alt={name} layout="fill" />
            </StyledCardImageLink>
            <div>
                <Text bold="true">{name}</Text>
                <div>
                    {tags.map((tag) => (
                        <Text key={tag}>{tag}</Text>
                    ))}
                </div>
                <a href={links.github}>Code</a>
                <a href={links.live}>Live Preview</a>
            </div>
        </article>
    );
}

export default Card;
