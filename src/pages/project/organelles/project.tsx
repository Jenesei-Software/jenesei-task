import { ProjectBar } from "../molecules/project-bar";
import { ProjectList } from "../molecules/project-list";
import { ProjectTitle } from "../molecules/project-title";

export const Project = () => {
  return (
    <div className="Project">
      <ProjectTitle />
      <ProjectBar />
      <ProjectList />
    </div>
  );
};
