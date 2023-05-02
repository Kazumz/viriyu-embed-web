import 'normalize.css/normalize.css';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Embed | UK property analysis</title>

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />

                <meta
                    name="title"
                    property="og:title"
                    content="Embed | UK property analysis"
                />

                <link rel="icon" href="/favicon.ico" />

                <link rel="canonical" href="https://embed.viriyu.com/" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#61bb8b"
                />

                <meta
                    name="description"
                    content="Transform your approach to gathering data for the UK Property Market with Viriyu. Save time and effort by integrating our powerful tool directly on your website. Discover the power of Viriyu today."
                />
                <meta
                    name="description"
                    property="og:description"
                    content="Transform your approach to gathering data for the UK Property Market with Viriyu. Save time and effort by integrating our powerful tool directly on your website. Discover the power of Viriyu today."
                />

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Viriyu Embed"
                />
                <meta name="mobile-web-app-capable" content="yes" />

                <meta property="og:type" content="Website" />

                <meta name="author" content="Kallum Parr" />

                <meta
                    name="image"
                    property="og:image"
                    content="/android-chrome-512x512.png"
                />

                <meta name="msapplication-TileColor" content="#61bb8b" />
                <meta name="theme-color" content="#61bb8b" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
            </Head>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-LM019DS0PF"
                strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-LM019DS0PF);
               `}
            </Script>
            
            <Component {...pageProps} />
        </>
    );
}