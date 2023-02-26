import { motion } from 'framer-motion';

type Props = {
  title: string;
  tech: string[];
  summary: string[];
  image: JSX.Element;
};

export const ExperienceCard = ({ image, tech, title, summary }: Props) => {
  return (
    <article
      className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col
      items-center space-y-8 overflow-hidden rounded-lg bg-[#292929] p-10 text-center text-white opacity-40
      transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="flex h-24 w-24 items-center justify-center"
      >
        {image}
      </motion.div>

      <h4 className="text-4xl underline decoration-teal-400">{title}</h4>
      <div className="my-2 flex justify-center space-x-2">
        {tech.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <ul className="mx-20 list-disc space-y-4 text-start text-lg">
        {summary.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
