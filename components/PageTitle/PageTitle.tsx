import { Bubbles } from '../../assets/images';
import { Title } from '../../styles/elements';
import { StyledPageTitle } from './PageTitle.styles';
import { PageTitleProps } from './PageTitle.types';

export function PageTitle(props: PageTitleProps) {
    return (
        <StyledPageTitle>
            <Title fontSize="38px" marginBottom="16px">
                <span>{props.title}</span>
                <Bubbles />
            </Title>
        </StyledPageTitle>
    );
}
