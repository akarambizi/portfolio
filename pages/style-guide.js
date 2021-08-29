import React from 'react';
import { Title, Button, Wrapper } from '../styles/elements';

function StyleGuide() {
    return (
        <Wrapper>
            <p>Style Guide</p>
            <div>
                <p>Typography</p>
                <span>Poppins</span>
                <Title>Heading 1</Title>
                <Title as="h2">Heading 2</Title>
                <Title as="h3">Heading 3</Title>
                <Title as="h4">Heading 4</Title>
                <p>Body text</p>
                <p>Text text</p>
            </div>
            <div>
                <div>
                    <p>Colors</p>
                    <span>Primary Color</span>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <p>Tertiary Color</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <p>Style</p>
                <span>Corner Radius</span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <Button shadow>Join Group</Button>
                <Button secondary>login</Button>
                <Button>Sign Up</Button>
            </div>
        </Wrapper>
    );
}

export default StyleGuide;
