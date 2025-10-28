import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, ExternalLink } from '../../assets/images';
import projectsList from '../../assets/json/projects.json';
import * as S from './SinglePageLayout.styles';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
        },
    },
};

export function SinglePageLayout() {
    const [activeSection, setActiveSection] = useState('about');

    const sections = useMemo(
        () => [
            { id: 'about', label: 'About Me' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
        ],
        []
    );

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            const foundSection = sections.find((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
                }
                return false;
            });

            if (foundSection) {
                setActiveSection(foundSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);
    const techStack = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL'];

    return (
        <S.MainContainer>
            <S.FloatingElements>
                <div className="floating-shape" />
                <div className="floating-shape" />
                <div className="floating-shape" />
                <div className="floating-shape" />
            </S.FloatingElements>

            <S.ContentWrapper>
                <S.LeftPanel variants={containerVariants} initial="hidden" animate="visible">
                    <div>
                        <S.HeroSection variants={itemVariants}>
                            <S.Name initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                Arthur Karambizi
                            </S.Name>
                            <S.Title initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                Full Stack Software Engineer
                            </S.Title>
                            <S.Description initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                I build exceptional digital experiences that combine thoughtful design with robust engineering.
                            </S.Description>
                        </S.HeroSection>

                        <S.Navigation variants={itemVariants}>
                            <ul>
                                {sections.map((section, index) => (
                                    <motion.li key={section.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}>
                                        <a
                                            href={`#${section.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(section.id);
                                            }}
                                            className={activeSection === section.id ? 'active' : ''}
                                        >
                                            {section.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </S.Navigation>
                    </div>

                    <S.SocialLinks variants={itemVariants}>
                        {[
                            { href: 'https://github.com/arthurkarambizi', Icon: GithubIcon },
                            { href: 'https://linkedin.com/in/arthurkarambizi', Icon: LinkedinIcon },
                        ].map(({ href, Icon }, index) => (
                            <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }} whileHover={{ y: -2 }}>
                                <Icon />
                            </motion.a>
                        ))}
                    </S.SocialLinks>
                </S.LeftPanel>

                <S.RightPanel>
                    <S.Section id="about" style={{ paddingTop: '0' }}>
                        <S.SplitSection>
                            <S.SectionLabel>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                                    About
                                </motion.div>
                            </S.SectionLabel>
                            <S.SectionContent>
                                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                                    <S.AboutText>
                                        My journey into the world of technology began in 2012 when I discovered the art of creating custom web themes. What started as curiosity quickly transformed into an unstoppable passion for crafting digital experiences that push the boundaries of what&apos;s
                                        possible.
                                    </S.AboutText>
                                    <S.AboutText>
                                        Today, I specialize in building cutting-edge applications that seamlessly blend stunning visual design with robust, scalable architecture. My expertise spans the full spectrum of modern web development, from crafting pixel-perfect user interfaces to
                                        architecting complex backend systems.
                                    </S.AboutText>

                                    <S.CodeBlock>
                                        <div style={{ marginTop: '20px', color: '#4ecdc4' }}>
                                            <div className="prompt">whoami</div>
                                            <div style={{ marginLeft: '20px', color: '#bb86fc' }}>arthur@dev:~$</div>
                                            <div style={{ marginLeft: '20px' }}>Full Stack Developer | Problem Solver | Tech Enthusiast</div>
                                        </div>
                                    </S.CodeBlock>

                                    <S.TechGrid>
                                        {techStack.map((tech, index) => (
                                            <motion.div key={tech} className="tech-item" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.03 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                                                <div className="tech-name">{tech}</div>
                                            </motion.div>
                                        ))}
                                    </S.TechGrid>
                                </motion.div>
                            </S.SectionContent>
                        </S.SplitSection>
                    </S.Section>

                    <S.Section id="experience">
                        <S.SplitSection>
                            <S.SectionLabel>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                                    Experience
                                </motion.div>
                            </S.SectionLabel>
                            <S.SectionContent>
                                <S.ExperienceTimeline>
                                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                                        <S.TimelineItem>
                                            <S.ExperienceHeader>
                                                <h3>Full Stack Software Engineer</h3>
                                                <S.ExperienceCompany>Microsoft</S.ExperienceCompany>
                                                <S.ExperiencePeriod>2022 — Present</S.ExperiencePeriod>
                                            </S.ExperienceHeader>
                                            <S.ExperienceDescription>
                                                <p>
                                                    Architecting scalable cloud solutions and developing enterprise-grade applications that serve millions of users worldwide. Leading cross-functional teams in delivering innovative features while maintaining the highest standards of code quality and
                                                    performance.
                                                </p>
                                            </S.ExperienceDescription>
                                            <S.ExperienceTech>
                                                <span>Azure</span>
                                                <span>C#</span>
                                                <span>.NET</span>
                                                <span>TypeScript</span>
                                                <span>React</span>
                                                <span>Kubernetes</span>
                                            </S.ExperienceTech>
                                        </S.TimelineItem>

                                        <S.TimelineItem>
                                            <S.ExperienceHeader>
                                                <h3>Senior Software Developer</h3>
                                                <S.ExperienceCompany>Previous Company</S.ExperienceCompany>
                                                <S.ExperiencePeriod>2020 — 2022</S.ExperiencePeriod>
                                            </S.ExperienceHeader>
                                            <S.ExperienceDescription>
                                                <p>Led the development of mission-critical web applications and APIs. Implemented CI/CD pipelines and modernized legacy systems, improving performance by 40% and reducing deployment time by 60%.</p>
                                            </S.ExperienceDescription>
                                            <S.ExperienceTech>
                                                <span>React</span>
                                                <span>Node.js</span>
                                                <span>PostgreSQL</span>
                                                <span>AWS</span>
                                                <span>Docker</span>
                                            </S.ExperienceTech>
                                        </S.TimelineItem>

                                        <S.TimelineItem>
                                            <S.ExperienceHeader>
                                                <h3>Software Developer</h3>
                                                <S.ExperienceCompany>Tech Startup</S.ExperienceCompany>
                                                <S.ExperiencePeriod>2018 — 2020</S.ExperiencePeriod>
                                            </S.ExperienceHeader>
                                            <S.ExperienceDescription>
                                                <p>Built scalable web applications from concept to deployment. Collaborated with design and product teams to deliver user-centric solutions that drove 150% user growth.</p>
                                            </S.ExperienceDescription>
                                            <S.ExperienceTech>
                                                <span>JavaScript</span>
                                                <span>Vue.js</span>
                                                <span>Python</span>
                                                <span>MongoDB</span>
                                            </S.ExperienceTech>
                                        </S.TimelineItem>
                                    </motion.div>
                                </S.ExperienceTimeline>
                            </S.SectionContent>
                        </S.SplitSection>
                    </S.Section>

                    <S.Section id="projects">
                        <S.SplitSection>
                            <S.SectionLabel>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                                    Projects
                                </motion.div>
                            </S.SectionLabel>
                            <S.SectionContent>
                                <S.ProjectsList>
                                    {projectsList.slice(0, 3).map((project, index) => (
                                        <S.ProjectItem key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ x: 8 }}>
                                            <S.ProjectHeader>
                                                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                                                <S.ProjectLinks>
                                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                        <GithubIcon />
                                                    </a>
                                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink />
                                                    </a>
                                                </S.ProjectLinks>
                                            </S.ProjectHeader>
                                            <S.ProjectDescription>{project.description || 'A modern web application built with cutting-edge technologies, focusing on performance and user experience.'}</S.ProjectDescription>
                                            <S.ProjectTags>
                                                {project.tags.map((tech: string) => (
                                                    <span key={tech}>{tech}</span>
                                                ))}
                                            </S.ProjectTags>
                                        </S.ProjectItem>
                                    ))}
                                </S.ProjectsList>
                            </S.SectionContent>
                        </S.SplitSection>
                    </S.Section>
                </S.RightPanel>
            </S.ContentWrapper>
        </S.MainContainer>
    );
}
