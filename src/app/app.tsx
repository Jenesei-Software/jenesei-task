import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import './app.css';

import { RootState } from '../redux/store';
import { Project } from '../pages/project/organelles/project';
import { Tasks } from '../pages/tasks/organelles/tasks';
import { AppGeneral } from './app-general';

function App() {
  const projectState = useSelector((state: RootState) => state.projectsState);

  useEffect(() => {
    console.log('Project State:', projectState);
  }, [projectState]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppGeneral />}>
          <Route path="*" element={<Navigate to="/project" />} />
          <Route index element={<Navigate to="/project" />} />
          <Route path="project">
            <Route index element={<Project />} />
            <Route path=":id" element={<Tasks />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export { App };
