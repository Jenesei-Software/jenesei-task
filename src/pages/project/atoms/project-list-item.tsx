import { NavLink } from "react-router-dom";

import { Project } from "../../../redux/projects/interfaces";

import "../styles/project-list-item.css";

const getTotalTasks = (project: Project): number => {
  return Object.values(project.columns || {})
    .reduce((acc, tasks) => acc + tasks.length, 0);
}

export const ProjectListItem = (props: Project) => {
  return (
    <NavLink to={`/project/${props.projectNumber}`} className={({ isActive }) => isActive ? "ProjectListItem ProjectListItem--active" : "ProjectListItem"}>
      <div className="ProjectListItem__Title">{props.title}</div>
      <div className="ProjectListItem__Quantity">{getTotalTasks(props)} task</div>
    </NavLink>
  );
};
