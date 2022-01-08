import Image from 'next/image';
import styled from 'styled-components';
import { Grid, Text } from '../styles/elements';
import { GithubIcon, ExternalLink } from '../assets/images';
// import { ReactComponent as IconBedSvg } from '../assets/images/icon-bed.svg';

const StyledCard = styled.article`
    background: red;
    width: 100%;
`;
// const StyledCardImageLink = styled.a`
//     display: block;
//     position: relative;

//     &:hover,
//     &:focus {
//         &::after {
//             opacity: 1;
//         }
//     }

//     &::after {
//         border-radius: 27px;
//         border: 3px solid var(--primary-color);
//         content: '';
//         height: 100%;
//         left: -3px;
//         opacity: 0;
//         pointer-events: none;
//         position: absolute;
//         top: -4px;
//         transition: opacity 0.2s ease-out;
//         width: 100%;
//         z-index: 0;
//     }

//     img {
//         border-radius: 25px;
//         display: block;
//         height: 100%;
//         object-fit: cover;
//         max-height: 380px;
//         margin: 0 auto;
//         position: relative;
//         width: 100%;
//         cursor: pointer;
//     }
// `;
function Card({ data: { name, image, links, tags } }) {
    return (
        <StyledCard>
            {/* <StyledCardImageLink>
                <img src={image} alt={name} layout="fill" />
            </StyledCardImageLink> */}
            <div>
                <Text bold md>
                    {name}
                </Text>
                <Grid>
                    <a href={links.github}>
                        <GithubIcon/>
                        Code
                    </a>
                    <a href={links.live}>
                        <ExternalLink />
                        Live Preview
                    </a>
                </Grid>
                <Grid>
                    {tags.map((tag) => (
                        <Text key={tag}>{tag}</Text>
                    ))}
                </Grid>
            </div>
        </StyledCard>
    );
}

export default Card;
