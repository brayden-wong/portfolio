import { ProjectCard } from '~/components';
import { PROJECTS } from '~/constants';

export const Projects = () => {
  return (
    <div className="relative flex h-screen w-screen max-w-full flex-col items-center justify-evenly overflow-hidden md:flex-row">
      <h3 className="absolute top-4 py-1.5 text-3xl font-medium uppercase tracking-[20px] text-white md:top-24">
        Projects
      </h3>

      <div className="relative flex w-full flex-row">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            summary={project.summary}
          />
        ))}
      </div>
      <div className="absolute top-1/4 left-0 z-20 h-[600px] w-full skew-y-12 bg-teal-400/20" />
      <div className="absolute left-0 bottom-1/3 z-10 h-[150px] w-full -skew-y-[24deg] bg-white/40 md:h-[250px] md:-skew-y-[18deg]" />
    </div>
  );
};
