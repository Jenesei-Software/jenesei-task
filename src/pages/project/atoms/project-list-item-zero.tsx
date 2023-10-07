import { useState } from "react";

import { ModalNewProject } from "../../../modules/modal-new-project/organelles/modal-new-project";

import "../styles/project-list-item.css";

export const ProjectListItemZero = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  return (
    <div className="ProjectListItemZero ProjectListItem">
      {isAdd && <ModalNewProject changeIsAdd={changeIsAdd} />}
      <div className="ProjectListItem__Title" onClick={changeIsAdd}>Create new Project</div>
    </div>
  );
};
