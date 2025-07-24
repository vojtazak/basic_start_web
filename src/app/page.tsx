"use client";

import Head from 'next/head';
import Bio from '@/components/bio';
import Gallery from '@/components/gallery';
import Contact from '@/components/contact';


const Home = () => {

  return (
    <div className="pt-[80px]">
      <Head>
        <title>Home page</title>
      </Head>
      <Bio/> {/* bio */}
      <Gallery/> {/* gallery */}
      <Contact /> {/* contact */}
    </div>
  );
};

export default Home;