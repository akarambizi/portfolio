import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../src/assets/styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
