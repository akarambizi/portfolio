import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function ProjectsPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page with projects section
        router.replace('/#projects');
    }, [router]);

    return (
        <>
            <Head>
                <title>Projects - Arthur Karambizi</title>
                <meta name="description" content="Explore my portfolio of web development projects featuring modern technologies and creative solutions." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    background: '#0f172a',
                    color: '#e2e8f0',
                }}
            >
                <p>Redirecting to Projects section...</p>
            </div>
        </>
    );
}

export default ProjectsPage;
