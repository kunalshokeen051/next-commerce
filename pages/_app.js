import Head from 'next/head';
import '@/styles/globals.css';
import '@/styles/Loader.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {

  return (

    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>NIKE | Just Do it!</title>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
  )
}
