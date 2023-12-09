import AboutList from './AboutList';
import { Text } from '../../assets/styles/elements';
import about from '../../assets/json/about.json';
import { StyledAboutCard } from './About.styles';

export function AboutCard() {
    return (
        <StyledAboutCard>
            <img src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Arthur Karambizi" />
            <div>
                <Text bold marginBottom="0" fontSize="18px">
                    Arthur Karambizi
                </Text>
                <Text marginBottom="16px" fontSize="14px">
                    Front End developer
                </Text>
                <Text>Hello My name is Arthur Karambizi. I love building websites And I also enjoy other activities like Soccer, music and art.</Text>

                <AboutList title=" Languages" list={about.languages} />
                <AboutList title="Tools" list={about.tools} />
                <AboutList title=" Design" list={about.design} />
                <AboutList title=" My Interests" list={about.interests} />
            </div>
        </StyledAboutCard>
    );
}
