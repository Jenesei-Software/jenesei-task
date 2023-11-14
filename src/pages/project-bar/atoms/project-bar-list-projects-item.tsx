import { useLocation, useNavigate } from "react-router-dom";

import { Project } from "@stores/projects/interfaces";

import "../styles/project-bar-list-projects-item.css";
import { ProjectBarListProjectsItemEdit } from "./project-bar-list-projects-item-edit";

// const getTotalTasks = (project: Project): number => {
//   return Object.values(project.columns || {})
//     .reduce((acc, tasks) => acc + (tasks.list && tasks.list.length), 0);
// }
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
    <div
      onClick={() => {
        navigate(`/project/${props.project.projectNumber}`);
      }}
      className={
        location.pathname === `/project/${props.project.projectNumber}`
          ? "ProjectBarListProjectsItem ProjectBarListProjectsItem--active"
          : "ProjectBarListProjectsItem"
      }
      style={{ backgroundImage: `url(${props.project.backgroundLink})` }}
    >
      <div className="ProjectBarListProjectsItem__Title">
        {props.project.title}
      </div>
      <ProjectBarListProjectsItemEdit
        onClick={() => props.onClick(props.project)}
      />
      {/* <div className="ProjectBarListProjectsItem__Quantity">{getTotalTasks(props)} task</div> */}
    </div>
  );
};
