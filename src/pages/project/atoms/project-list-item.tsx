import { NavLink } from "react-router-dom";

import { Project } from "../../../redux/projects/interfaces";

import "../styles/project-list-item.css";

export const ProjectListItem = (props: Project) => {
  return (
    <div className="ProjectListItem">
      <div className="ProjectListItem__Title">{props.title}</div>
      <div className="ProjectListItem__Quantity">Length task: </div>
      <NavLink
        className="ProjectListItem__Go"
        to={`/project/${props.projectNumber}`}
      >
        <button>Go</button>
      </NavLink>
    </div>
  );
};
