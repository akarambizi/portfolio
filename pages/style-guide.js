import React from 'react';
import { Button } from '../styles/elements';

function StyleGuide() {
    return (
        <section>
            <p>Style Guide</p>
            <div>
                <p>Typography</p>
                <span>Poppins</span>
                <h1>Heading 1</h1>
                <h2>Heading 1</h2>
                <h3>Heading 1</h3>
                <h4>Heading 1</h4>
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
        </section>
    );
}

export default StyleGuide;
