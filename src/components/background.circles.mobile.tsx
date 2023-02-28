import { motion } from 'framer-motion';

export const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        translateY: ['-50px', '-50px', '-50px', '-50px', 0, 0],
        scale: [1, 0.5, 0.75, 1, 0, 1],
        opacity: [0.1, 0.4, 0.8, 0.5, 0, 1.0],
        borderRadius: ['20%', '50%', '50%', '20%', '20%', 0],
      }}
      transition={{
        duration: 3.5,
      }}
      className="absolute h-screen w-full items-center justify-center sm:hidden"
    >
      <div className="relative -top-28 flex h-full w-full items-center justify-center">
        <div
          className="absolute h-[200px] w-[200px] animate-ping rounded-full border-2
      border-[#333333]"
        />
        <div className="absolute  h-[300px] w-[300px] rounded-full border-2 border-[#333333]" />
        <div className="absolute h-[400px] w-[400px] rounded-full border-2 border-[#333333]" />
        <div
          className="absolute h-[550px] w-[550px] animate-pulse rounded-full border-2 border-teal-500
        opacity-20"
        />
        {/* <div
          className="absolute left-1/4 mt-52 h-[200px] w-[200px] animate-ping rounded-full border-2
      border-[#333333]"
        />
        <div className="absolute left-11 mt-40 h-[300px] w-[300px] rounded-full border-2 border-[#333333]" />
        <div className="absolute -left-2 mt-28 h-[400px] w-[400px] rounded-full border-2 border-[#333333]" />
        <div
          className="absolute -left-[20%] mt-10 h-[550px] w-[550px] animate-pulse rounded-full border-2 border-teal-500
        opacity-20"
        /> */}
      </div>
    </motion.div>
  );
};
