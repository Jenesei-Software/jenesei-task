import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "../styles/project-header.css";

import { ProjectColumnItemAdd } from "../atoms/project-column-item-add";
import { ModalNewColumn } from "../../../modules/modal-new-column/organelles/modal-new-column";
import { ModalEditProject } from "../../../modules/modal-edit-project/organelles/modal-edit-project";
import { Project } from "../../../stores/projects/interfaces";
import { ProjectHeaderEdit } from "../atoms/project-header-edit";
import { updateSearchQuery } from "../../../stores/search-query/actions";

interface IProjectHeader {
  title: string;
  project: Project;
}
export const ProjectHeader = (props: IProjectHeader) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string | null>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  const changeIsEdit = () => {
    setIsEdit(!isEdit);
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
      {isEdit && (
        <ModalEditProject project={props.project} changeIsAdd={changeIsEdit} />
      )}
      <div className="ProjectHeader">
        <div className="ProjectHeader__logo">{props.title}</div>
        <input
          className="ProjectHeader__Input Modal__Block__Input"
          required
          placeholder="Search by name"
          type="text"
          value={value || ""}
          minLength={4}
          maxLength={40}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <ProjectColumnItemAdd onClick={changeIsAdd} title={"Add a Column"} />
        <ProjectHeaderEdit onClick={changeIsEdit} />
      </div>
    </>
  );
};
