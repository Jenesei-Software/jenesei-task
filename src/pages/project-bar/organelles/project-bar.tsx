import { Outlet } from "react-router-dom";

import { ProjectBarList } from "../molecules/project-bar-list";

import '../styles/project-bar.css'

export const ProjectBar = () => {
  return (
    <div className="ProjectBar">
      <ProjectBarList />
      <Outlet />
    </div>
  );
};
