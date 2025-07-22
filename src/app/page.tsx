"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Bio from '@/components/bio';
import Gallery from '@/components/gallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';


const Home = () => {

  return (
    <div className="pt-[80px]">
      <Head>
        <title>My Gallery</title>
      </Head>
      <Header /> {/* top menu */}
      <Bio/> {/* bio */}
      <Gallery/> {/* gallery */}
      <Contact /> {/* contact */}
      <Footer /> {/* footer */}
      
    </div>
  );
};

export default Home;