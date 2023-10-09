import { Outlet, useLocation } from "react-router-dom";

import { ProjectBarList } from "../molecules/project-bar-list";

import '../styles/project-bar.css'

export const ProjectBar = () => {
  return (
    <div className="ProjectBar">
      <ProjectBarList />
      <div className="ProjectBar__Line" />
      <Outlet />
      <div className="ProjectBar__Line" />
    </div>
  );
};
