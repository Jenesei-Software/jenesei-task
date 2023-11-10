import { ProjectBarListProjects } from "./project-bar-list-projects";
import { ProjectBarListTeam } from "./project-bar-list-team";

import "../styles/project-bar-list.css";
import { ProjectBarListTime } from "./project-bar-list-time";

export const ProjectBarList = () => {

  return (
    <div className="ProjectBarList">
      <ProjectBarListProjects/>
      <ProjectBarListTeam/>
      <ProjectBarListTime/>
    </div>
  );
};
