import { useState } from "react";

import { ModalNewProject } from "@modules/modal-new-project/organelles/modal-new-project";
import {
  StyleProjectBarListProjectsItemZero,
  StyleProjectBarListProjectsItemZeroTitle,
} from "./project-bar-list-projects-item-zero.styles";

export const ProjectBarListProjectsItemZero = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  return (
    <>
      {isAdd && <ModalNewProject changeIsAdd={changeIsAdd} />}
      <StyleProjectBarListProjectsItemZero>
        <StyleProjectBarListProjectsItemZeroTitle onClick={changeIsAdd}>
          Create new Project
        </StyleProjectBarListProjectsItemZeroTitle>
      </StyleProjectBarListProjectsItemZero>
    </>
  );
};
