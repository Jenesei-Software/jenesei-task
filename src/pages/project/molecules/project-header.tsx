import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "../styles/project-header.css";

import { ProjectColumnItemAdd } from "../atoms/project-column-item-add";

import { ModalNewColumn } from "@modules/modal-new-column/organelles/modal-new-column";
import { Project } from "@stores/projects/interfaces";
import { updateSearchQuery } from "@stores/search-query/actions";
import {
  StyleProjectHeader,
  StyleProjectHeaderInput,
  StyleProjectHeaderTitle,
} from "./project-header.styles";

interface IProjectHeader {
  title: string;
  project: Project;
}
export const ProjectHeader = (props: IProjectHeader) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string | null>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };

  const handleInputChange = (title: string) => {
    setValue(title);
    dispatch(updateSearchQuery(title, props.project.projectNumber));
  };

  useEffect(() => {
    handleInputChange("");
  }, [props.project.projectNumber]);
  return (
    <>
      {isAdd && (
        <ModalNewColumn
          projectNumber={props.project.projectNumber}
          changeIsAdd={changeIsAdd}
        />
      )}
      <StyleProjectHeader>
        <StyleProjectHeaderTitle>{props.title}</StyleProjectHeaderTitle>
        <StyleProjectHeaderInput
          required
          placeholder="Search by name"
          type="text"
          value={value || ""}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <ProjectColumnItemAdd onClick={changeIsAdd} title={"Add a Column"} />
      </StyleProjectHeader>
    </>
  );
};
