import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./app.css";

import { AppGeneral } from "./app-general/organelles/app-general";
import { updateProjects } from "../stores/projects/actions";
import { ProjectBar } from "../pages/project-bar/organelles/project-bar";
import { Project } from "../pages/project/organelles/project";
import { Settings } from "../pages/settings/organelles/settings";
import { localStorageName } from "../stores/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedProjects = localStorage.getItem(localStorageName);
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects);
      dispatch(updateProjects(parsedProjects));
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppGeneral />}>
          <Route path="*" element={<Navigate to="/project" />} />
          <Route path="project" element={<ProjectBar />}>
            <Route path=":projectNumber" element={<Project />} />
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export { App };
