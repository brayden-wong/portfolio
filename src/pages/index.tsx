import { type NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '~/components';
import { Hero, About } from '~/features';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brayden Wong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col bg-black">
        <Nav />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>
      </main>
    </>
  );
};

export default Home;
