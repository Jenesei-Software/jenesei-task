import { NavLink } from "react-router-dom";

import { Project } from "@stores/projects/interfaces";

import "../styles/project-bar-list-item.css";
import { ProjectBarListItemEdit } from "./project-bar-list-item-edit";

// const getTotalTasks = (project: Project): number => {
//   return Object.values(project.columns || {})
//     .reduce((acc, tasks) => acc + (tasks.list && tasks.list.length), 0);
// }
interface IProjectBarListItem {
  project: Project;
  onClick: (project:Project) => void;
}
export const ProjectBarListItem = (props: IProjectBarListItem) => {
  return (
    <NavLink
      to={`/project/${props.project.projectNumber}`}
      className={({ isActive }) =>
        isActive
          ? "ProjectBarListItem ProjectBarListItem--active"
          : "ProjectBarListItem"
      }
      style={{ backgroundImage: `url(${props.project.backgroundLink})` }}
    >
      <div className="ProjectBarListItem__Title">{props.project.title}</div>
      <ProjectBarListItemEdit onClick={() => props.onClick(props.project)} />
      {/* <div className="ProjectBarListItem__Quantity">{getTotalTasks(props)} task</div> */}
    </NavLink>
  );
};
