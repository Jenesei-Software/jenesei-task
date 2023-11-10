import { useState } from "react";

import { ModalNewProject } from "@modules/modal-new-project/organelles/modal-new-project";

import "../styles/project-bar-list-projects-item.css";

export const ProjectBarListProjectsItemZero = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  return (
    <>
      {isAdd && <ModalNewProject changeIsAdd={changeIsAdd} />}
      <div className="ProjectBarListProjectsItemZero ProjectBarListProjectsItem">
        <div className="ProjectBarListProjectsItem__Title" onClick={changeIsAdd}>Create new Project</div>
      </div>
    </>
  );
};
