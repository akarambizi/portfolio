import { useState, useEffect } from 'react';

interface UseTypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: UseTypewriterProps) => {
    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const startTyping = () => {
            let i = 0;
            const typeText = () => {
                if (i < text.length) {
                    setDisplayText(text.slice(0, i + 1));
                    i += 1;
                    timeoutId = setTimeout(typeText, speed);
                } else {
                    setIsComplete(true);
                }
            };
            typeText();
        };

        timeoutId = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text, speed, delay]);

    return { displayText, isComplete };
};
