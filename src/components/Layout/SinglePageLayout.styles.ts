import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { colors, sizes, media } from '../../assets/styles';

const glow = keyframes`
    0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.3); }
    50% { box-shadow: 0 0 40px rgba(255, 107, 107, 0.6), 0 0 60px rgba(78, 205, 196, 0.3); }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0) translateX(0) translateZ(0); }
    25% { transform: translateY(-30px) translateX(10px) translateZ(20px); }
    50% { transform: translateY(-60px) translateX(-5px) translateZ(-10px); }
    75% { transform: translateY(-30px) translateX(-10px) translateZ(30px); }
`;

const rotateShape = keyframes`
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(0deg); }
    66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(120deg); }
    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
`;

export const MainContainer = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

export const FloatingElements = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    perspective: 1000px;
    transform-style: preserve-3d;
    perspective: 1000px;

    .floating-shape {
        position: absolute;
        transform-style: preserve-3d;
        animation: ${float} 8s ease-in-out infinite;

        &:nth-child(1) {
            width: 120px;
            height: 120px;
            top: 15%;
            right: 15%;
            background: linear-gradient(45deg, ${colors.primary}40, ${colors.secondary}20);
            border: 1px solid ${colors.primary}60;
            border-radius: 20px;
            transform: rotateX(45deg) rotateY(45deg);
            animation: ${float} 10s ease-in-out infinite, rotateShape 20s linear infinite;
            animation-delay: 0s;
        }

        &:nth-child(2) {
            width: 80px;
            height: 80px;
            bottom: 25%;
            left: 20%;
            background: linear-gradient(135deg, ${colors.secondary}30, ${colors.accent}20);
            border: 1px solid ${colors.secondary}50;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            transform: rotateX(60deg) rotateZ(30deg);
            animation: ${float} 12s ease-in-out infinite, rotateShape 25s linear infinite reverse;
            animation-delay: 2s;
        }

        &:nth-child(3) {
            width: 100px;
            height: 100px;
            top: 50%;
            right: 25%;
            background: linear-gradient(225deg, ${colors.accentPurple}25, ${colors.primary}15);
            border: 1px solid ${colors.accentPurple}40;
            border-radius: 50%;
            transform: rotateY(60deg) rotateX(30deg);
            animation: ${float} 15s ease-in-out infinite, rotateShape 30s linear infinite;
            animation-delay: 4s;
        }

        &:nth-child(4) {
            width: 60px;
            height: 60px;
            top: 30%;
            left: 10%;
            background: linear-gradient(315deg, ${colors.accent}35, ${colors.primary}20);
            border: 1px solid ${colors.accent}60;
            clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            transform: rotateX(30deg) rotateZ(45deg);
            animation: ${float} 8s ease-in-out infinite, rotateShape 18s linear infinite reverse;
            animation-delay: 6s;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    position: relative;
    z-index: 2;

    ${media.tabletMax} {
        flex-direction: column;
    }
`;

export const LeftPanel = styled(motion.aside)`
    width: 50%;
    max-width: 500px;
    padding: ${sizes.xxxxl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 10;

    ${media.tabletMax} {
        position: relative;
        width: 100%;
        max-width: none;
        height: auto;
        border-right: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: ${sizes.xl};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${colors.gradientPrimary};
        opacity: 0.03;
        pointer-events: none;
    }
`;

export const RightPanel = styled.main`
    margin-left: 40%;
    max-width: 900px;
    width: calc(50% - ${sizes.xxxxl});
    padding: ${sizes.xxxxl};
    overflow-y: auto;
    min-height: 100vh;

    ${media.tabletMax} {
        margin-left: 0;
        width: 100%;
        padding: ${sizes.xl};
        max-width: none;
    }
`;

export const HeroSection = styled(motion.section)`
    text-align: left;
    margin-bottom: ${sizes.xxxxl};
`;

export const Name = styled(motion.h1)`
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: ${sizes.sm};
    line-height: 1.1;
`;

export const Title = styled(motion.h2)`
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    font-weight: 500;
    color: ${colors.primary};
    margin-bottom: ${sizes.xl};
    line-height: 1.3;
`;

export const Description = styled(motion.p)`
    font-size: ${sizes.base};
    color: ${colors.textMuted};
    line-height: 1.6;
    margin-bottom: ${sizes.xxxl};
    max-width: 400px;
`;

export const Navigation = styled(motion.nav)`
    margin-bottom: ${sizes.xxxl};

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: ${sizes.sm};

        li {
            a {
                display: flex;
                align-items: center;
                padding: ${sizes.sm} 0;
                color: ${colors.textMuted};
                text-decoration: none;
                font-size: ${sizes.sm};
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    left: -${sizes.base};
                    top: 50%;
                    transform: translateY(-50%);
                    width: 8px;
                    height: 1px;
                    background: ${colors.textMuted};
                    transition: all 0.3s ease;
                }

                &:hover,
                &.active {
                    color: ${colors.text};

                    &::before {
                        width: 32px;
                        background: ${colors.primary};
                    }
                }

                &.active {
                    color: ${colors.primary};
                }
            }
        }
    }
`;

export const SocialLinks = styled(motion.div)`
    display: flex;
    gap: ${sizes.lg};

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        color: ${colors.textMuted};
        transition: all 0.3s ease;

        &:hover {
            color: ${colors.primary};
        }

        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export const Section = styled(motion.section)`
    margin-bottom: ${sizes.xxxxl};
    padding: ${sizes.xxxl} 0;

    &:first-child {
        padding-top: ${sizes.xl};
    }
`;

export const SectionTitle = styled(motion.h3)`
    font-size: ${sizes.xxxl};
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: ${sizes.xxxl};
    position: relative;
    padding-left: ${sizes.xl};

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 40px;
        background: ${colors.gradientPrimary};
        border-radius: 2px;
    }
`;

export const ProjectCard = styled(motion.div)`
    background: ${colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid ${colors.glassBorder};
    border-radius: 24px;
    padding: ${sizes.xl};
    margin-bottom: ${sizes.xl};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${colors.gradientPrimary};
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: ${colors.shadowPrimary};
        border-color: rgba(255, 107, 107, 0.3);

        &::before {
            opacity: 0.05;
        }

        .project-image img {
            transform: scale(1.05);
        }

        .project-title {
            color: ${colors.primary};
        }
    }
`;

export const ProjectImage = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: ${sizes.lg};
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${colors.gradientPrimary};
        opacity: 0.1;
        transition: opacity 0.4s ease;
    }
`;

export const ProjectContent = styled.div`
    position: relative;
    z-index: 1;

    .project-title {
        font-size: ${sizes.xl};
        font-weight: 600;
        color: ${colors.text};
        margin-bottom: ${sizes.sm};
        transition: color 0.4s ease;
    }

    .project-description {
        color: ${colors.textMuted};
        line-height: 1.6;
        margin-bottom: ${sizes.base};
        font-size: ${sizes.base};
    }

    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: ${sizes.xs};
        margin-bottom: ${sizes.lg};

        span {
            background: rgba(255, 107, 107, 0.1);
            color: ${colors.primary};
            padding: ${sizes.xs} ${sizes.sm};
            border-radius: 20px;
            font-size: ${sizes.xs};
            font-weight: 500;
            border: 1px solid rgba(255, 107, 107, 0.2);
            transition: all 0.3s ease;

            &:hover {
                background: rgba(255, 107, 107, 0.2);
                transform: translateY(-1px);
            }
        }
    }

    .project-links {
        display: flex;
        gap: ${sizes.base};

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            color: ${colors.textMuted};
            background: ${colors.glass};
            border: 1px solid ${colors.glassBorder};
            border-radius: 50%;
            transition: all 0.3s ease;

            &:hover {
                color: ${colors.secondary};
                background: rgba(78, 205, 196, 0.1);
                border-color: rgba(78, 205, 196, 0.3);
                transform: translateY(-2px);
            }

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
`;

export const AboutText = styled.p`
    color: ${colors.textMuted};
    line-height: 1.7;
    margin-bottom: ${sizes.lg};
    font-size: ${sizes.base};
    max-width: 100%;
`;

export const TechGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: ${sizes.base};
    margin-top: ${sizes.xl};
    perspective: 1000px;

    .tech-item {
        background: ${colors.glass};
        backdrop-filter: blur(10px);
        border: 1px solid ${colors.glassBorder};
        border-radius: 12px;
        padding: ${sizes.base};
        text-align: center;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
        position: relative;
        cursor: pointer;

        &:hover {
            transform: rotateX(-10deg) rotateY(10deg) translateZ(10px) translateY(-5px);
            background: rgba(78, 205, 196, 0.1);
            border-color: rgba(78, 205, 196, 0.4);
            box-shadow: 0 15px 30px rgba(78, 205, 196, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        &:nth-child(even):hover {
            transform: rotateX(10deg) rotateY(-10deg) translateZ(10px) translateY(-5px);
        }

        .tech-name {
            font-size: ${sizes.xs};
            font-weight: 500;
            color: ${colors.textMuted};
            transition: color 0.3s ease;
        }

        &:hover .tech-name {
            color: ${colors.secondary};
        }
    }
`;

// Split Layout Components
export const SplitSection = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: ${sizes.xxl};
    align-items: start;
    margin-bottom: ${sizes.xxxl};

    ${media.tabletMax} {
        grid-template-columns: 1fr;
        gap: ${sizes.lg};
    }
`;

export const SplitLeft = styled.div`
    position: sticky;
    top: ${sizes.xl};
`;

export const SplitRight = styled.div`
    min-width: 0; /* Prevents content overflow */
`;

// Experience Components
export const ExperienceCard = styled.div`
    background: ${colors.glass};
    backdrop-filter: blur(20px);
    border: 1px solid ${colors.glassBorder};
    border-radius: 16px;
    padding: ${sizes.xxl};
    margin-bottom: ${sizes.xl};
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    perspective: 1000px;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.6s ease;
        z-index: 0;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(139, 92, 246, 0.4);
        transform: rotateX(-5deg) rotateY(5deg) translateZ(15px) translateY(-5px);
        box-shadow: 0 25px 50px rgba(139, 92, 246, 0.15), 0 15px 30px rgba(0, 0, 0, 0.2);

        &::after {
            opacity: 1;
        }
    }

    > * {
        position: relative;
        z-index: 1;
    }
`;

export const ExperienceHeader = styled.div`
    margin-bottom: ${sizes.lg};

    h3 {
        font-size: ${sizes.xl};
        font-weight: 600;
        color: ${colors.text};
        margin: 0 0 ${sizes.xs} 0;
    }
`;

export const ExperienceCompany = styled.div`
    font-size: ${sizes.lg};
    font-weight: 500;
    color: ${colors.primary};
    margin-bottom: ${sizes.xs};
`;

export const ExperiencePeriod = styled.div`
    font-size: ${sizes.sm};
    color: ${colors.textMuted};
    font-weight: 400;
`;

export const ExperienceDescription = styled.div`
    margin-bottom: ${sizes.lg};

    p {
        color: ${colors.textMuted};
        line-height: 1.7;
        font-size: ${sizes.base};
        margin: 0;
    }
`;

export const ExperienceTech = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
        background: rgba(139, 92, 246, 0.08);
        color: ${colors.textMuted};
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 10px;
        font-weight: 400;
        border: 1px solid rgba(139, 92, 246, 0.15);
        transition: all 0.2s ease;

        &:hover {
            background: rgba(139, 92, 246, 0.12);
            color: ${colors.primary};
        }
    }
`;

// Improved Project Components
export const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${sizes.xxl};
`;

export const ProjectItem = styled(motion.article)`
    padding: ${sizes.xl} ${sizes.lg};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    perspective: 1000px;
    transform-style: preserve-3d;
    background: ${colors.glass};
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid ${colors.glassBorder};
    margin-bottom: ${sizes.lg};
    position: relative;
    overflow: hidden;

    &:last-child {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 0;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.6s ease;
        z-index: 1;
    }

    &:hover {
        transform: rotateX(5deg) rotateY(-5deg) translateZ(20px);
        box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2), 0 10px 20px rgba(0, 0, 0, 0.3);
        border-color: rgba(139, 92, 246, 0.4);

        &::before {
            left: 100%;
        }
    }
`;
export const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${sizes.base};

    ${media.mobile} {
        flex-direction: column;
        gap: ${sizes.base};
    }
`;

export const ProjectTitle = styled.h3`
    font-size: ${sizes.xl};
    font-weight: 600;
    color: ${colors.text};
    margin: 0;
    line-height: 1.2;
`;

export const ProjectLinks = styled.div`
    display: flex;
    gap: ${sizes.base};

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        color: ${colors.textMuted};
        transition: all 0.3s ease;

        &:hover {
            color: ${colors.primary};
            transform: translateY(-2px);
        }

        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

export const ProjectDescription = styled.p`
    color: ${colors.textMuted};
    line-height: 1.6;
    margin: 0 0 ${sizes.lg} 0;
    font-size: ${sizes.base};
    max-width: 100%;
`;

export const ProjectTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    span {
        background: rgba(255, 255, 255, 0.04);
        color: ${colors.textMuted};
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 10px;
        font-weight: 400;
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: all 0.2s ease;

        &:hover {
            background: rgba(139, 92, 246, 0.08);
            color: ${colors.primary};
            border-color: rgba(139, 92, 246, 0.15);
        }
    }
`;

export const SectionLabel = styled.div`
    font-size: ${sizes.sm};
    font-weight: 600;
    color: ${colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 1px;
    position: sticky;
    top: ${sizes.xl};

    ${media.tabletMax} {
        position: relative;
        top: auto;
    }
`;

export const SectionContent = styled.div`
    min-width: 0; // Prevents grid overflow
`;

// Typing Animation Component
export const TypingText = styled.span`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: -2px;
        width: 2px;
        height: 1.2em;
        background: ${colors.primary};
        animation: ${pulse} 1s infinite;
    }
`;

// Terminal-style components
export const CodeBlock = styled.div`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: ${sizes.lg};
    font-family: 'Monaco', 'Menlo', monospace;
    font-size: 14px;
    color: ${colors.textMuted};
    position: relative;

    &::before {
        content: '●●●';
        position: absolute;
        top: 12px;
        left: 12px;
        color: rgba(255, 107, 107, 0.6);
        font-size: 12px;
    }

    .prompt {
        color: ${colors.primary};

        &::before {
            content: '$ ';
        }
    }
`;

// Experience Timeline
export const ExperienceTimeline = styled.div`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(to bottom, ${colors.primary}, transparent);
        opacity: 0.3;
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    margin-left: ${sizes.xl};
    padding-bottom: ${sizes.xxl};

    &::before {
        content: '';
        position: absolute;
        left: -${sizes.xl};
        top: 8px;
        width: 8px;
        height: 8px;
        background: ${colors.primary};
        border-radius: 50%;
        transform: translateX(-3px);
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    }

    &:last-child {
        padding-bottom: 0;
    }
`;
