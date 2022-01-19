import styled from 'styled-components';
import { Text } from '../styles/elements';
import { sizes } from '../styles';

const StyledAboutList = styled.div`
    margin-bottom: ${sizes.xxs};
`;

export default function AboutList({ title, list }) {
    return (
        <StyledAboutList>
            <Text bold md marginBottom="0">
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
