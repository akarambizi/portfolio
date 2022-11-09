import styled from 'styled-components';
import { Text } from '../styles/elements';
import { sizes } from '../styles';

const StyledAboutList = styled.div`
    margin-bottom: ${sizes.xxs};
`;

interface AboutListProps {
    title: string;
    list: string[];
}

export default function AboutList({ title, list }: AboutListProps) {
    return (
        <StyledAboutList>
            <Text bold marginBottom="0">
                {title}:
            </Text>
            <ul>
                {list.map((item, index) => (
                    <li key={item}>
                        <p>
                            {item}
                            {index < list.length - 1 && ', '}
                        </p>
                    </li>
                ))}
            </ul>
        </StyledAboutList>
    );
}
