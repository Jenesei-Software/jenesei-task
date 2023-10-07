import { Outlet } from "react-router-dom";

import { ProjectList } from "../molecules/project-list";

import '../styles/project.css'

export const Project = () => {
  return (
    <div className="Project">
      <ProjectList />
      <div className="Project__Line" />
      <Outlet />
      <div className="Project__Line" />
    </div>
  );
};
