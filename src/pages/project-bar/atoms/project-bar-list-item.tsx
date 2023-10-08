import { NavLink } from "react-router-dom";

import { Project } from "../../../store/projects/interfaces";

import "../styles/project-bar-list-item.css";

const getTotalTasks = (project: Project): number => {
  return Object.values(project.columns || {})
    .reduce((acc, tasks) => acc + (tasks.list && tasks.list.length), 0);
}

export const ProjectBarListItem = (props: Project) => {
  return (
    <NavLink to={`/project/${props.projectNumber}`} className={({ isActive }) => isActive ? "ProjectBarListItem ProjectBarListItem--active" : "ProjectBarListItem"}
      style={{ backgroundImage: `url(${props.backgroundLink})` }}
    >
      <div className="ProjectBarListItem__Title">{props.title}</div>
      <div className="ProjectBarListItem__Quantity">{getTotalTasks(props)} task</div>
    </NavLink>
  );
};
