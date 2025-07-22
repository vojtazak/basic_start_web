"use client";

import Head from 'next/head';
import Header from '@/components/header';
import Contact from '@/components/contact';
import Footer from '@/components/footer';


const Home = () => {

  return (
    <div className="pt-[80px]">
      <Head>
        <title>My Gallery</title>
      </Head>
      <Header /> {/* top menu */}
      <Contact /> {/* contact */}
      <Footer /> {/* footer */}
      
    </div>
  );
};

export default Home;