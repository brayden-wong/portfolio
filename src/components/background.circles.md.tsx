import { motion } from 'framer-motion';

export const BackgroundCirclesMd = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 3, 0, 1],
        opacity: [0.1, 0.4, 0.8, 0.5, 0, 1.0],
        borderRadius: ['20%', '50%', '50%', '20%', '20%'],
      }}
      transition={{
        duration: 3.5,
      }}
      className="absolute hidden h-screen w-full items-center justify-center sm:flex"
    >
      <div
        className="absolute mb-52 h-[200px] w-[200px] animate-ping rounded-full border-2 
        border-[#333333]"
      />
      <div className="absolute mb-52 h-[300px] w-[300px] rounded-full border-2 border-[#333333]" />
      <div className="absolute mb-52 h-[500px] w-[500px] rounded-full border-2 border-[#333333]" />
      <div
        className="absolute mb-52 h-[650px] w-[650px] animate-pulse rounded-full border-2 border-teal-500
        opacity-20"
      />
    </motion.div>
  );
};
