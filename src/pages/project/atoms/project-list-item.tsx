import { NavLink } from "react-router-dom";

import { Project, ProjectType, Task } from "../../../redux/projects/interfaces";

import "../styles/project-list-item.css";

const getTotalTasks = (project: ProjectType): number => {
  return Object.keys(project)
    .filter(key => Array.isArray(project[key as keyof ProjectType]))
    .reduce((acc, key) => acc + (project[key as keyof ProjectType] as Task[]).length, 0);
}

export const ProjectListItem = (props: Project) => {
  return (
    <NavLink to={`/project/${props.projectNumber}`} className={({ isActive }) => isActive ? "ProjectListItem ProjectListItem--active" : "ProjectListItem"}>
      <div className="ProjectListItem__Title">{props.title}</div>
      <div className="ProjectListItem__Quantity">{getTotalTasks(props)} task</div>
    </NavLink>
  );
};
