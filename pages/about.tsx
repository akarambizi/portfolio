import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function AboutPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page with about section
        router.replace('/#about');
    }, [router]);

    return (
        <>
            <Head>
                <title>About Me - Arthur Karambizi</title>
                <meta name="description" content="Learn more about Arthur Karambizi, a passionate software engineer who loves building exceptional digital experiences." />
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
                <p>Redirecting to About section...</p>
            </div>
        </>
    );
}

export default AboutPage;
