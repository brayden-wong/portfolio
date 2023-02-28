import { motion } from 'framer-motion';

type Props = {
  title: string;
  summary: string;
};

export const ProjectCard = ({ title, summary }: Props) => {
  return (
    <div
      key={title}
      className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 
          p-10 sm:p-16 md:p-32"
    >
      <div className="w-full max-w-6xl space-y-10 p-4 text-white sm:px-4 md:px-12 md:py-4">
        <motion.img />
        <h4 className="p py-0.5 text-center text-4xl underline decoration-teal-400">
          {title}
        </h4>
        <p className="text-lg">{summary}</p>
      </div>
    </div>
  );
};
