import { useState } from "react";

import { ModalNewProject } from "../../../modules/modal-new-project/organelles/modal-new-project";

import "../styles/project-bar.css";

export const ProjectBar = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  return (
    <div className="ProjectBar">
      {isAdd && <ModalNewProject changeIsAdd={changeIsAdd} />}
      <div className="ProjectBar__Add">
        <div onClick={changeIsAdd} className="ProjectBar__Add__Title">
          Create project
        </div>
      </div>
    </div>
  );
};
