import '../styles/globals.css'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
				<title>PIG</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png"/>
        <link rel="manifest" href="/icon/site.webmanifest"/>
        <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#770099"/>
        <meta name="msapplication-TileColor" content="#9f00a7"></meta>
        <meta name="theme-color" content="#770099"/>
			</Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
