import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../assets/styles';

const SpotlightContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.8s ease;

    &.active {
        opacity: 1;
    }

    /* Hide on mobile devices */
    @media (max-width: 768px) {
        display: none;
    }
`;

const SpotlightLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-out;

    &.primary {
        background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${colors.spotlight} 0%, transparent 50%);
    }

    &.secondary {
        background: radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${colors.spotlightSecondary} 0%, transparent 60%);
        transform: translate(10px, 10px);
    }

    &.accent {
        background: radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 217, 61, 0.05) 0%, transparent 70%);
        transform: translate(-5px, 5px);
    }
`;

const ParticleLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${colors.primary};
        border-radius: 50%;
        box-shadow: 0 0 10px ${colors.primary};
        opacity: 0.6;
        animation: particle-float 3s ease-in-out infinite;
    }

    &::before {
        left: calc(var(--mouse-x, 50%) + 20px);
        top: calc(var(--mouse-y, 50%) - 20px);
        animation-delay: 0s;
    }

    &::after {
        left: calc(var(--mouse-x, 50%) - 30px);
        top: calc(var(--mouse-y, 50%) + 30px);
        animation-delay: 1.5s;
    }

    @keyframes particle-float {
        0%,
        100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
        }
        50% {
            transform: translate(10px, -10px) scale(1.2);
            opacity: 1;
        }
    }
`;

export function MouseSpotlight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const layersRef = useRef<HTMLDivElement[]>([]);
    const rafRef = useRef<number>();

    useEffect(() => {
        let isVisible = false;

        const updateSpotlight = (x: number, y: number) => {
            if (containerRef.current && layersRef.current) {
                // Update all layers with slight offsets for depth
                layersRef.current.forEach((layer, index) => {
                    if (layer) {
                        const offset = index * 5;
                        layer.style.setProperty('--mouse-x', `${x - offset}px`);
                        layer.style.setProperty('--mouse-y', `${y - offset}px`);
                    }
                });

                if (!isVisible) {
                    containerRef.current.classList.add('active');
                    isVisible = true;
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                updateSpotlight(e.clientX, e.clientY);
            });
        };

        const handleMouseLeave = () => {
            if (containerRef.current) {
                containerRef.current.classList.remove('active');
                isVisible = false;
            }
        };

        // Only add listeners on desktop
        const isDesktop = window.innerWidth > 768;
        if (isDesktop) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <SpotlightContainer ref={containerRef}>
            <SpotlightLayer
                className="primary"
                ref={(el) => {
                    if (el) {
                        layersRef.current[0] = el;
                    }
                }}
            />
            <SpotlightLayer
                className="secondary"
                ref={(el) => {
                    if (el) {
                        layersRef.current[1] = el;
                    }
                }}
            />
            <SpotlightLayer
                className="accent"
                ref={(el) => {
                    if (el) {
                        layersRef.current[2] = el;
                    }
                }}
            />
            <ParticleLayer />
        </SpotlightContainer>
    );
}
