import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Ctas from '../components/Ctas';
import Explanation from '../components/Explanation';
import Video from '../components/Video';
import Faqs from '../components/Faqs';

const Home = () => (
  <>
    <Head>
      <title>Protect Line</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <Ctas />

      <Explanation />

      <Faqs />

      <Video />
    </main>

    <Footer />

    <style jsx>{`
    `}</style>
  </>
);

export { Home as default };
 