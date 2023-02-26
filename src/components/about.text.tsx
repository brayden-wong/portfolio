export const AboutText = () => {
  return (
    <div className="flex flex-col space-y-8 ">
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

      <div className="space-y-3">
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
