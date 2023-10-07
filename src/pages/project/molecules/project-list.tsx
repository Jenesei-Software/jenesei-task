import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import { ProjectListItem } from "../atoms/project-list-item";
import { Project } from "../../../redux/projects/interfaces";
import { ProjectListItemZero } from "../atoms/project-list-item-zero";

import "../styles/project-list.css";
import { useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";

export const ProjectList = () => {
  const projectState = useSelector((state: RootState) => state.projectsState);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleProjectClick = (project: Project, index: number) => {
    setSelectedIndex(index);
  }

  return (
    <div className="ProjectList">
      <Flipper flipKey={selectedIndex}>
        <div className="ProjectList__List">
          <ProjectListItemZero />

          {selectedIndex !== null && (
            <Flipped key={projectState.projects[selectedIndex].projectNumber} flipId={projectState.projects[selectedIndex].projectNumber}>
              <div onClick={() => handleProjectClick(projectState.projects[selectedIndex], selectedIndex)}>
                <ProjectListItem {...projectState.projects[selectedIndex]} />
              </div>
            </Flipped>
          )}

          {projectState.projects.map((e: Project, index: number) => (
            index !== selectedIndex && (
              <Flipped key={e.projectNumber} flipId={e.projectNumber}>
                <div onClick={() => handleProjectClick(e, index)}>
                  <ProjectListItem {...e} />
                </div>
              </Flipped>
            )
          ))}
        </div>
      </Flipper>
    </div>
  );
};

