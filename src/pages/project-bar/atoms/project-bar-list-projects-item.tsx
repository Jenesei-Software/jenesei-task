import { useLocation, useNavigate } from "react-router-dom";

import { Project } from "@stores/projects/interfaces";
import { ProjectBarListProjectsItemEdit } from "./project-bar-list-projects-item-edit";
import {
  StyleProjectBarListProjectsItem,
  StyleProjectBarListProjectsItemTitle,
} from "./project-bar-list-projects-item.styles";

interface IProjectBarListProjectsItem {
  project: Project;
  onClick: (project: Project) => void;
}
export const ProjectBarListProjectsItem = (
  props: IProjectBarListProjectsItem
) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <StyleProjectBarListProjectsItem
      onClick={() => {
        navigate(`/project/${props.project.projectNumber}`);
      }}
      style={{ backgroundImage: `url(${props.project.backgroundLink})` }}
    >
      <StyleProjectBarListProjectsItemTitle
        isLocation={
          location.pathname === `/project/${props.project.projectNumber}`
        }
      >
        {props.project.title}
      </StyleProjectBarListProjectsItemTitle>
      <ProjectBarListProjectsItemEdit
        onClick={() => props.onClick(props.project)}
      />
    </StyleProjectBarListProjectsItem>
  );
};
