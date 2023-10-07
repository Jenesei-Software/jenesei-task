import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "../styles/modal-edit-project.css";

import { Project } from "../../../store/projects/interfaces";
import { updateProject } from "../../../store/projects/actions";

interface IModalEditProject {
  changeIsAdd: () => void;
  project: Project
}
export const ModalEditProject = (props: IModalEditProject) => {
  const [value, setValue] = useState<Project | null>(null);
  const dispatch = useDispatch();
  const handleModalEditProject = () => {
    if (value?.title && value?.projectNumber) {
      const updatedProject = {
        ...value,
        title: value.title,
        backgroundLink: value.backgroundLink
      };
      dispatch(updateProject(updatedProject));
      props.changeIsAdd();
    }
  };
  useEffect(() => {
    if (props.project) {
      setValue(props.project);
    }
    return () => {
      setValue(null);
    };
  }, [props.project]);
  return (
    value ?
      <div className="Modal__Fixed">
        <form
          className="ModalEditProject"
          onSubmit={(e) => {
            e.preventDefault();
            handleModalEditProject();
          }}
        >
          <div className="ModalEditProject__Title">Edit of Project</div>
          <input
            className="ModalEditProject__Input"
            required
            placeholder="heading"
            type="text"
            value={value?.title || ""}
            minLength={4}
            onChange={(event) => setValue({ ...value, title: event.target.value })}
          />
          <input
            className="ModalEditProject__Input"
            placeholder="backgroundLink"
            type="text"
            value={value?.backgroundLink || ""}
            minLength={4}
            onChange={(event) => setValue({ ...value, backgroundLink: event.target.value })}
          />
          <button className="ModalEditProject__Button" type="submit">
            Edit
          </button>
          <button className="ModalEditProject__Button" onClick={props.changeIsAdd}>
            Cancel
          </button>
        </form>
      </div> : null
  );
};
