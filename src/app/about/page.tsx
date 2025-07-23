'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About story page</title>
        <meta name="description" content="About the artist and their journey." />
      </Head>

      <div className="pt-[80px] px-4 max-w-4xl mx-auto">
        <Header />

        <main className="py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About the Artist</h1>
          <p className="text-gray-700 leading-relaxed">
            This is the artist’s story. You can share background, artistic philosophy, or milestones here.
          </p>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
