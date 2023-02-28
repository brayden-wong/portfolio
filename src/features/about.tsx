import { motion } from 'framer-motion';
import image from '../../public/assets/about.png';
import { AboutText } from '~/components';

export const About = () => {
  return (
    <div
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center space-y-4
        px-4 text-center md:flex-row md:justify-evenly md:space-y-0 md:space-x-16 md:px-10 md:text-left"
    >
      <h3 className="relative top-2 text-3xl font-medium uppercase tracking-[20px] text-white md:absolute md:top-24">
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
        className="-mb-20 h-80 w-56 flex-shrink-0 rounded-lg object-cover sm:h-96 
          sm:w-72 md:mb-0 md:rounded-lg xl:h-[600px] xl:w-[450px]"
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
        <div className="space-y-4 rounded bg-black/90 px-4 py-5 backdrop-blur-md md:px-8">
          <h4 className="relative left-2 text-left text-2xl font-semibold sm:text-3xl">
            Here is a{' '}
            <span className="underline decoration-teal-400/80">little</span>{' '}
            about me.
          </h4>
          <AboutText />
        </div>
      </motion.div>
    </div>
  );
};
