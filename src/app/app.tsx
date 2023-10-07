import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./app.css";

import { Project } from "../pages/project/organelles/project";
import { Tasks } from "../pages/tasks/organelles/tasks";
import { AppGeneral } from "./app-general/organelles/app-general";
import { updateProjects } from "../redux/projects/actions";
import { RootState } from "../redux/store";

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
          <Route path="project" element={<Project />}>
            <Route path=":projectNumber" element={<Tasks />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export { App };
