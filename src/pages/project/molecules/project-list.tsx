import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { useParams } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { ProjectListItem } from "../atoms/project-list-item";
import { Project } from "../../../redux/projects/interfaces";
import { ProjectListItemZero } from "../atoms/project-list-item-zero";

import "../styles/project-list.css";

export const ProjectList = () => {
  const { projectNumber } = useParams();
  const projectState = useSelector((state: RootState) => state.projectsState);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setSelectedIndex(index);
  }
  useEffect(() => {
    if (selectedIndex === null) {
      const index = projectState.projects.findIndex((e: Project) => e.projectNumber === projectNumber);
      if (index !== -1) {
        setSelectedIndex(index);
      }
    }
  }, [projectNumber, projectState]);
  return (
    <div className="ProjectList">
      <Flipper flipKey={selectedIndex}>
        <div className="ProjectList__List">
          <ProjectListItemZero />

          {selectedIndex !== null && (
            <Flipped key={projectState.projects[selectedIndex].projectNumber} flipId={projectState.projects[selectedIndex].projectNumber}>
              <div onClick={() => handleProjectClick(selectedIndex)}>
                <ProjectListItem {...projectState.projects[selectedIndex]} />
              </div>
            </Flipped>
          )}

          {projectState.projects.map((e: Project, index: number) => (
            index !== selectedIndex && (
              <Flipped key={e.projectNumber} flipId={e.projectNumber}>
                <div onClick={() => handleProjectClick(index)}>
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

