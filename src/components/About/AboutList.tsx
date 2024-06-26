import { Text } from '../../assets/styles/elements';
import { AboutListProps } from './About.types';
import { StyledAboutList } from './About.styles';

export default function AboutList(props: AboutListProps) {
    return (
        <StyledAboutList>
            <Text bold marginBottom="0">
                {props.title}:
            </Text>
            <ul>
                {props.list.map((item, index) => (
                    <li key={item}>
                        <Text fontSize="14px" marginBottom="0">
                            {item}
                            {index < props.list.length - 1 && ', '}
                        </Text>
                    </li>
                ))}
            </ul>
        </StyledAboutList>
    );
}
