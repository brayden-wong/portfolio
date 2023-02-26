import { type NextPage } from 'next';
import Head from 'next/head';
import { Nav } from '~/components';
import { Hero, About, Experience, Projects, Contact } from '~/features';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brayden Wong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center bg-black">
        <Nav />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experiences">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
