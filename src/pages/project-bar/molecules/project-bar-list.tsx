import { ProjectBarListProjects } from "./options/project-bar-list-item.projects";

import { ProjectBarListItem } from "./project-bar-list-item";
import { StyleProjectBarList } from "./project-bar-list.styles";

interface IProjectBarList {
  isBarOpen: boolean;
}
export const ProjectBarList = (props: IProjectBarList) => {
  return (
    <StyleProjectBarList isBarOpen={props.isBarOpen}>
      <ProjectBarListItem title={"Projects"} isBarOpen={props.isBarOpen}>
        <ProjectBarListProjects />
      </ProjectBarListItem>
      <ProjectBarListItem
        title={"Team Members"}
        isBarOpen={props.isBarOpen}
      ></ProjectBarListItem>
      <ProjectBarListItem
        title={"Time"}
        isBarOpen={props.isBarOpen}
      ></ProjectBarListItem>
    </StyleProjectBarList>
  );
};
