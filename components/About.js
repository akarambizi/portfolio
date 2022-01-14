import React from 'react';
import { PageTitle } from '.';
import { EmailIcon, GithubIcon, LinkedinIcon } from '../assets/images';
import { AppContainer } from '../styles/elements';

export default function About() {
    return (
        <AppContainer id="about">
            <article>
                <PageTitle title="About Me." />
                <p>Hello again! My name is Arthur Karambizi. I love building websites And I also enjoy other activities like Soccer ,music and art.</p>
                <figure>
                    <img src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Arthur Karambizi" />
                    <figcaption>
                        <p>Arthur Karambizi</p>
                        <p>Software Engineer</p>
                        <ul>
                            <li>
                                <a href="mailto:arthurkarambizi@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email link">
                                    <EmailIcon />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/arthur-karambizi-7a0797143/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin link">
                                    <LinkedinIcon />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/arthurkarambizi" target="_blank" rel="noopener noreferrer" aria-label="Github link">
                                    <GithubIcon />
                                </a>
                            </li>
                        </ul>
                    </figcaption>
                </figure>

                <div>
                    <h2>Tools</h2>
                    <ul>
                        <li>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <p>HTML</p>
                        </li>
                        <li>
                            <p>CSS</p>
                        </li>
                        <li>
                            <p>React.js</p>
                        </li>
                        <li>
                            <p>Vue.js</p>
                        </li>
                        <li>
                            <p>Node.js</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>My Interests</h2>
                    <ul>
                        <li>Sports</li>
                        <li>Music</li>
                        <li>Sciences</li>
                        <li>Technology</li>
                        <li>Travel</li>
                        <li>Nature</li>
                    </ul>
                </div>
            </article>
        </AppContainer>
    );
}
