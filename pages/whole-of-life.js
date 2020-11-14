import React from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Content from '../components/Content';
import Form from '../components/Form';

const WholeOfLife = () => (
  <>
    <Head>
      <title>Whole Of Life Cover - Protect Line</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="main">    
      <section className="main__content">
        <Content />
      </section>

      <section className="main__content">
        <Form />
      </section>
    </main>

    <Footer />

    <style jsx>{`
      .main {
        display: flex;
        padding: 4rem;
        width: 100%;
        background-size: cover;
        background-position: center center;
        background-image: url("/whole-of-life.jpg");
      }
      .main__content {
        display: block;
        width: 50%;
      }
      .main__content:first-of-type {
        margin-right: 12rem;
      }
      .main__content:last-of-type {
        background: rgba(255, 255, 255, 0.5);
      }

      @media screen and (max-width: 980px) {
        .main {
          padding: 2rem;
        }
        .main__content:first-of-type {
          margin-right: 6rem;
        }
      }
      @media screen and (max-width: 767px) {
        .main {
          flex-direction: column;
        }
        .main__content {
          width: 100%;
        }
      }
    `}</style>
  </>
);

export { WholeOfLife as default };
 