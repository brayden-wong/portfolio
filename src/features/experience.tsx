import { AnimatePresence, motion } from 'framer-motion';
import { ExperienceCard } from '~/components/experience.card';
import { EXPERIENCES } from '~/constants';

export const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'linear' }}
      className="relative flex h-screen w-screen max-w-full flex-col items-center justify-evenly overflow-hidden md:flex-row"
    >
      <h3 className="absolute top-24 text-3xl font-medium uppercase tracking-[20px] text-white">
        Experiences
      </h3>

      <div className="flex w-full justify-center space-x-5 p-10">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard
            key={experience.title}
            title={experience.title}
            tech={experience.tech}
            summary={experience.summary}
            image={experience.image}
          />
        ))}
      </div>
    </motion.div>
  );
};
