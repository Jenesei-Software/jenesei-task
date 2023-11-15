import { ProjectBarListProjects } from "./project-bar-list-item.projects";

import "../styles/project-bar-list.css";
import { ProjectBarListItem } from "./project-bar-list-item";

interface IProjectBarList {
  isBarOpen: boolean;
  changeIsBarOpen: () => void;
}
export const ProjectBarList = (props: IProjectBarList) => {
  return (
    <div
      className={
        props.isBarOpen
          ? "ProjectBarList--open ProjectBarList"
          : "ProjectBarList--close ProjectBarList"
      }
    >
      <ProjectBarListItem title={"Projects"}>
        <ProjectBarListProjects />
      </ProjectBarListItem>
      <ProjectBarListItem title={"Team Members"}></ProjectBarListItem>
      <ProjectBarListItem title={"Time"}></ProjectBarListItem>
    </div>
  );
};
