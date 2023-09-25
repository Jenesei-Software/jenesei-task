import { Navigate, Route, Routes } from 'react-router-dom';

import { AppGeneral } from './app-general';
import { ProjectList } from '../pages/project-list/organelles/project-list';
import { Tasks } from '../pages/tasks/organelles/tasks';

import './app.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppGeneral />}>
          <Route path="*" element={<Navigate to="/project-list" />} />
          <Route index element={<Navigate to="/project-list" />} />
          <Route path="project-list">
            <Route index element={<ProjectList />} />
            <Route path=":id" element={<Tasks />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
