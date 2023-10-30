import { useState } from "react";

import { ModalNewProject } from "@modules/modal-new-project/organelles/modal-new-project";

import "../styles/project-bar-list-item.css";

export const ProjectBarListItemZero = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  return (
    <>
      {isAdd && <ModalNewProject changeIsAdd={changeIsAdd} />}
      <div className="ProjectBarListItemZero ProjectBarListItem">
        <div className="ProjectBarListItem__Title" onClick={changeIsAdd}>Create new Project</div>
      </div>
    </>
  );
};
