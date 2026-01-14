import Head from 'next/head';
import { MouseSpotlight } from '../src/components/MouseSpotlight/MouseSpotlight';
import { SinglePageLayout } from '../src/components/Layout/SinglePageLayout';

export default function Home() {
    return (
        <>
            <Head>
                <title>Arthur Karambizi - Software Engineer</title>
                <meta name="description" content="Arthur Karambizi is a passionate software engineer who crafts exceptional digital experiences with modern technologies and clean, efficient code." />
                <meta name="keywords" content="Arthur Karambizi, Software Engineer, Web Developer, React, Next.js, TypeScript" />
                <meta name="author" content="Arthur Karambizi" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MouseSpotlight />
            <SinglePageLayout />
        </>
    );
}
