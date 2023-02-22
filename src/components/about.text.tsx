import Link from 'next/link';

export const AboutText = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      <p>
        My name is Brayden Wong, and I&apos;m a{` `}
        <span className="font-semibold italic text-teal-400/80">
          software engineer
        </span>
        {` `}
        based in Salt Lake City, UT. I am currently a senior at Neumont College
        of Computer Science. I have a passion using new and up and coming
        technologies to build my next project.
      </p>
      <p>
        I am currently an intern at{` `}
        <Link target="_blank" href="https://speechcloud.com">
          <span className="font-semibold italic text-teal-400/80">
            @Speechcloud
          </span>
        </Link>
        , where I utilize my skills and building a learning management platform
        for students and teachers. I am currently using the following
        technologies:{` `}
        <span className="font-medium italic text-teal-400/80">
          Angular, NodeJs, and Firebase
        </span>
        .
      </p>

      <div className="space-y-1">
        <p>
          My favorite technologies to use in my personal projects are:{` `}
          <span className="font-medium italic text-teal-400/80">
            Typescript, NestJs, React, TRPC, NextJs, TailwindCss, and Prisma
          </span>
        </p>
        <p>
          I have worked with the following databases:
          <span className="font-medium italic text-teal-400/80">
            {` `}
            Redis, Postgres, MySQL, MongoDB, and Firebase
          </span>
        </p>
      </div>
    </div>
  );
};
