import { useLocation, useNavigate } from "react-router-dom";

import { Project } from "@stores/projects/interfaces";
import {
  StyleProjectBarListProjectsItem,
  StyleProjectBarListProjectsItemEdit,
  StyleProjectBarListProjectsItemTitle,
} from "./project-bar-list-projects-item.styles";
import { Another } from "@icons/another/another";

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
      <StyleProjectBarListProjectsItemEdit onClick={(e) => e.stopPropagation()}>
        <Another.MoreCircle
          onClick={() => props.onClick(props.project)}
        />
      </StyleProjectBarListProjectsItemEdit>
    </StyleProjectBarListProjectsItem>
  );
};
