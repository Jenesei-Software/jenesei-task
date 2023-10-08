import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./app.css";

import { AppGeneral } from "./app-general/organelles/app-general";
import { updateProjects } from "../store/projects/actions";
import { RootState } from "../store/store";
import { ProjectBar } from "../pages/project-bar/organelles/project-bar";
import { Project } from "../pages/project/organelles/project";

function App() {
  const projectState = useSelector((state: RootState) => state.projectsState);
  const dispatch = useDispatch();
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects);
      dispatch(updateProjects(parsedProjects));
    }
  }, []);
  useEffect(() => {
    console.log("Project State:", projectState);
  }, [projectState]);
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<AppGeneral />}>
          <Route path="*" element={<Navigate to="/project" />} />
          <Route path="project" element={<ProjectBar />}>
            <Route path=":projectNumber" element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export { App };
