import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {
  title: string;
  tech: string[];
  summary: string[];
  image: JSX.Element;
};

export const ExperienceCard = ({ image, tech, title, summary }: Props) => {
  return (
    <article
      className="flex w-[350px] flex-shrink-0 flex-col
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
        key={title}
        className="flex h-24 w-24 items-center justify-center"
      >
        {image}
      </motion.div>

      <h4 className="px-4 py-0.5 text-4xl underline decoration-teal-400">
        <Link href={'https://speechcloud.com'}>{title}</Link>
      </h4>
      <div className="my-2 flex items-center justify-center space-x-2">
        {tech.map((skill, index) => {
          if (index === tech.length - 1)
            return (
              <p key={skill} className="text-sm font-bold text-teal-400">
                {skill}
              </p>
            );
          return (
            <div key={skill} className="flex items-center space-x-2">
              <p className="text-sm font-bold text-teal-400">{skill}</p>
              <span>•</span>
            </div>
          );
        })}
      </div>

      <ul className="mx-4 list-disc space-y-4 text-start text-lg md:mx-8 xl:mx-12">
        {summary.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
