import AboutList from './AboutList';
import { Text } from '../../assets/styles/elements';
import about from '../../assets/json/about.json';
import { StyledAboutCard } from './About.styles';

export function AboutCard() {
    return (
        <StyledAboutCard data-testid="about-card">
            <img src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Arthur Karambizi" />
            <div>
                <Text bold marginBottom="0" fontSize="18px">
                    Arthur Karambizi
                </Text>
                <Text marginBottom="0px" fontSize="12px">
                    Software Engineer
                </Text>
                <Text fontSize="14px" marginBottom="8px">
                    Hello My name is Arthur Karambizi. I&apos;m a passionate software engineer who loves building websites. In addition to coding, I enjoy activities such as soccer, music, and art.
                </Text>

                <AboutList title=" Languages" list={about.languages} />
                <AboutList title="Tools" list={about.tools} />
                <AboutList title=" Design" list={about.design} />
                <AboutList title=" My Interests" list={about.interests} />
            </div>
        </StyledAboutCard>
    );
}
