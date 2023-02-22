import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../../public/assets/profile.png';
import { BackgroundCircles } from '../components';

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Brayden Wong",
      "I'm a software engineer",
      'I love building and innovating',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src={profile}
        width={192}
        height={192}
        className="relative mx-auto h-48 w-48 rounded-full object-cover"
        alt="Brayden Wong"
      />
      <div className="z-20 w-full text-center">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="lg:-text-6xl py-1 px-10 text-5xl font-semibold">
          <span className="text-white">{text}</span>
          <Cursor cursorBlinking={true} cursorColor="#f5f5f5" />
        </h1>
        <div className="mt-4 space-x-8">
          <Link href="#about">
            <button
              className="rounded border-2 px-2 py-2 text-sm uppercase
              tracking-widest text-gray-500 transition-all hover:border-white"
            >
              About
            </button>
          </Link>
          <Link href="#experience">
            <button
              className="rounded border-2 px-2 py-2 text-sm uppercase
              tracking-widest text-gray-500 transition-all hover:border-white"
            >
              Experience
            </button>
          </Link>
          <Link href="#projects">
            <button
              className="rounded border-2 px-2 py-2 text-sm uppercase
              tracking-widest text-gray-500 transition-all hover:border-white"
            >
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
