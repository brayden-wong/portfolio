import { motion } from 'framer-motion';
import image from '../../public/assets/about.png';
import { AboutText } from '~/components';

export const About = () => {
  return (
    <div
      className="relative mx-auto flex h-screen max-w-7xl flex-col
      items-center justify-evenly px-10 text-center md:flex-row md:space-x-16 md:text-left"
    >
      <h3 className="absolute top-24 text-3xl font-medium uppercase tracking-[20px] text-white">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.5, ease: 'linear' }}
        viewport={{ once: true }}
        src={image.src}
        className="flex-shink-0 -mb-20 h-96 w-64 rounded-lg 
          object-cover md:mb-0 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.5, ease: 'linear' }}
        viewport={{ once: true }}
        className="space-y-10 rounded-md border-[3px] border-white/40 bg-white text-white/90"
      >
        <div className="space-y-4 rounded bg-black/90 px-2 py-4 backdrop-blur-md md:px-8">
          <h4 className="text-4xl font-semibold">
            Here is a{' '}
            <span className="underline decoration-teal-400/80 ">little</span>{' '}
            about me.
          </h4>
          <AboutText />
        </div>
      </motion.div>
    </div>
  );
};
