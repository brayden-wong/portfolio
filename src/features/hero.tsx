import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../../public/assets/profile.png';
import { BackgroundCirclesMd, BackgroundCircles } from '../components';

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, I'm Brayden Wong",
      "I'm a software engineer",
      'I love to build things',
      'I am a full stack developer',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 text-center">
      <BackgroundCirclesMd />
      <BackgroundCircles />
      <Image
        src={profile}
        width={192}
        height={192}
        className="relative mx-auto h-48 w-48 rounded-full object-cover"
        alt="Brayden Wong"
      />
      <div className="z-20 w-full text-center">
        <h2 className="pb-2 text-sm uppercase tracking-[12px] text-gray-500">
          Software Engineer
        </h2>
        <h1 className="h-32 py-1 px-10 text-5xl font-semibold lg:text-6xl">
          <span className="text-white">{text}</span>
          <Cursor cursorBlinking={true} cursorColor="#f5f5f5" />
        </h1>
        <div className="flex justify-center space-x-4">
          <Link href="#about">
            <button
              className="rounded border-2 border-transparent px-5 py-2 text-sm uppercase
              tracking-widest text-gray-500 transition-all hover:border-white"
            >
              About
            </button>
          </Link>
          <Link href="#experiences">
            <button
              className="rounded border-2 border-transparent px-5 py-2 text-sm uppercase
              tracking-widest text-gray-500 transition-all hover:border-white"
            >
              Experiences
            </button>
          </Link>
          <Link href="#projects">
            <button
              className="rounded border-2 border-transparent px-5 py-2 text-sm uppercase
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
