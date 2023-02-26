import { PROJECTS } from '~/constants';

export const Projects = () => {
  return (
    <div className="relative flex h-screen w-screen max-w-full flex-col items-center justify-evenly overflow-hidden md:flex-row">
      <h3 className="absolute top-24 text-3xl font-medium uppercase tracking-[20px] text-white">
        Projects
      </h3>

      <div className="relative flex w-full flex-row overflow-x-scroll">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 
            p-20 md:p-44"
          >
            <div className="max-w-6xl space-y-10 px-0 text-white md:px-10">
              <h4 className="text-center text-4xl underline decoration-teal-400">
                {project.title}
              </h4>
              <p className="text-center text-lg md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/4 left-0 z-20 h-[600px] w-full skew-y-12 bg-teal-400/20" />
      <div className="absolute left-0 bottom-1/3 z-10 h-[250px] w-full -skew-y-[18deg] bg-white/40" />
    </div>
  );
};
