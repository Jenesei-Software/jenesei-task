import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { ProjectListItem } from "../atoms/project-list-item";
import { Project } from "../../../redux/projects/interfaces";

import "../styles/project-list.css";

export const ProjectList = () => {
  const projectState = useSelector((state: RootState) => state.projectsState);
  return (
    <div className="ProjectList">
      {projectState.projects.map((e: Project) => (
        <ProjectListItem key={e.projectNumber} projectNumber={e.projectNumber} title={e.title} />
      ))}
    </div>
  );
};
