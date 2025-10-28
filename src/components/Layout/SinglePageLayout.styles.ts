import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { colors, sizes, media } from '../../assets/styles';

const glow = keyframes`
    0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.3); }
    50% { box-shadow: 0 0 40px rgba(255, 107, 107, 0.6), 0 0 60px rgba(78, 205, 196, 0.3); }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
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

    .floating-orb {
        position: absolute;
        border-radius: 50%;
        background: ${colors.gradientPrimary};
        filter: blur(1px);
        animation: ${float} 6s ease-in-out infinite;

        &:nth-child(1) {
            width: 300px;
            height: 300px;
            top: 10%;
            right: 10%;
            opacity: 0.1;
            animation-delay: 0s;
        }

        &:nth-child(2) {
            width: 200px;
            height: 200px;
            bottom: 20%;
            left: 15%;
            opacity: 0.08;
            animation-delay: 2s;
        }

        &:nth-child(3) {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 30%;
            opacity: 0.06;
            animation-delay: 4s;
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
    margin-left: 50%;
    max-width: 800px;
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
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: ${sizes.sm};
    margin-top: ${sizes.xl};

    .tech-item {
        background: ${colors.glass};
        backdrop-filter: blur(10px);
        border: 1px solid ${colors.glassBorder};
        border-radius: 8px;
        padding: ${sizes.sm};
        text-align: center;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-2px);
            background: rgba(78, 205, 196, 0.1);
            border-color: rgba(78, 205, 196, 0.3);
        }

        .tech-name {
            font-size: 11px;
            font-weight: 400;
            color: ${colors.textMuted};
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
    border-radius: 12px;
    padding: ${sizes.xl};
    margin-bottom: ${sizes.lg};
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(139, 92, 246, 0.3);
        transform: translateY(-2px);
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
    padding: ${sizes.xl} 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        padding-left: ${sizes.base};
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
