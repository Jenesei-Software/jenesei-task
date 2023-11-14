import { ProjectBarListProjects } from "./project-bar-list-projects";
import { ProjectBarListTeam } from "./project-bar-list-team";
import { ProjectBarListTime } from "./project-bar-list-time";

import "../styles/project-bar-list.css";

interface IProjectBarList{
  isBarOpen: boolean
  changeIsBarOpen: () => void
}
export const ProjectBarList = (props:IProjectBarList) => {
  return (
    <div
      className={
        props.isBarOpen
          ? "ProjectBarList--open ProjectBarList"
          : "ProjectBarList--close ProjectBarList"
      }
    >
      <ProjectBarListProjects />
      <ProjectBarListTeam />
      <ProjectBarListTime />
    </div>
  );
};
