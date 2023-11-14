import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { useParams } from "react-router-dom";

import { RootState } from "@stores/store";
import { Project } from "@stores/projects/interfaces";

import { ModalEditProject } from "@modules/modal-edit-project/organelles/modal-edit-project";

import { ProjectBarListProjectsItemZero } from "../atoms/project-bar-list-projects-item-zero";
import { ProjectBarListProjectsItem } from "../atoms/project-bar-list-projects-item";

import "../styles/project-bar-list-projects.css";
import { HidingArrowCircle } from "../../../icons/hiding-arrow-circle/hiding-arrow-circle";

export const ProjectBarListProjects = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [project, setProject] = useState<Project | null>(null);

  const { projectNumber } = useParams();
  const projectState = useSelector((state: RootState) => state.projectsState);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const changeIsEdit = (project?: Project) => {
    if (project) setProject(project);
    setIsEdit(!isEdit);
  };
  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleProjectBarClick = (index: number) => {
    setSelectedIndex(index);
  };
  useEffect(() => {
    if (projectState && projectState.projects) {
      const projectExists = projectState.projects.some(
        (e) => e.projectNumber === projectNumber
      );
      if (!projectExists) {
        setSelectedIndex(null);
      } else {
        const index = projectState.projects.findIndex(
          (e: Project) => e.projectNumber === projectNumber
        );
        setSelectedIndex(index);
      }
    }
  }, [projectNumber, projectState]);
  return (
    <div className="ProjectBarListItem ProjectBarListProjects">
      {isEdit && project && (
        <ModalEditProject project={project} changeIsAdd={changeIsEdit} />
      )}
      <div className="ProjectBarListItem__Header">
        <div className="ProjectBarListItem__Header__Title">Projects</div>
        <HidingArrowCircle onCLick={changeIsOpen} isActive={isOpen} />
      </div>
      <Flipper flipKey={selectedIndex} className={isOpen ? "ProjectBarListItem__Info--open ProjectBarListItem__Info" : "ProjectBarListItem__Info--close ProjectBarListItem__Info"}>
        <div className="ProjectBarListProjects__List">
          {selectedIndex !== null && (
            <Flipped
              key={projectState.projects[selectedIndex]?.projectNumber}
              flipId={projectState.projects[selectedIndex]?.projectNumber}
            >
              <div onClick={() => handleProjectBarClick(selectedIndex)}>
                <ProjectBarListProjectsItem
                  project={projectState.projects[selectedIndex]}
                  onClick={changeIsEdit}
                />
              </div>
            </Flipped>
          )}
          {projectState.projects &&
            projectState.projects.length !== 0 &&
            projectState.projects.map(
              (e: Project, index: number) =>
                index !== selectedIndex && (
                  <Flipped key={e.projectNumber} flipId={e.projectNumber}>
                    <div onClick={() => handleProjectBarClick(index)}>
                      <ProjectBarListProjectsItem
                        project={e}
                        onClick={changeIsEdit}
                      />
                    </div>
                  </Flipped>
                )
            )}
          <ProjectBarListProjectsItemZero />
        </div>
      </Flipper>
    </div>
  );
};
