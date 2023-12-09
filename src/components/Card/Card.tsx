import { ExternalLink, GithubIcon } from '../../../assets/images';
import { sizes } from '../../styles';
import { Text } from '../../styles/elements';
import { StyledCard, StyledCardImage, StyledCardLinks } from './Card.styles';
import { CardProps } from './Card.types';

export function Card({ data: { title, image, links, tags }, large = false }: CardProps) {
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
