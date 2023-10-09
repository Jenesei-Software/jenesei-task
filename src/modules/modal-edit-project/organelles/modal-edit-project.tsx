import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "../styles/modal-edit-project.css";

import { Project } from "../../../store/projects/interfaces";
import { deleteProject, updateProject } from "../../../store/projects/actions";

interface IModalEditProject {
  changeIsAdd: () => void;
  project: Project;
}
export const ModalEditProject = (props: IModalEditProject) => {
  const [value, setValue] = useState<Project | null>(null);
  const dispatch = useDispatch();
  const handleModalEditProject = () => {
    if (value?.title && value?.projectNumber) {
      const updatedProject = {
        ...value,
        title: value.title,
        backgroundLink: value.backgroundLink,
      };
      dispatch(updateProject(updatedProject));
      props.changeIsAdd();
    }
  };
  const handleModalDeleteProject = () => {
    if (value) dispatch(deleteProject(props.project.projectNumber));
    props.changeIsAdd();
  };
  useEffect(() => {
    if (props.project) {
      setValue(props.project);
    }
    return () => {
      setValue(null);
    };
  }, [props.project]);
  return value ? (
    <div className="Modal__Fixed">
      <form
        className="ModalEditProject Modal__Block"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalEditProject();
        }}
      >
        <div className="ModalEditProject__Head">
          <div className="Modal__Block__Title">Edit of Project</div>
          <button
            className="Modal__Block__Button"
            onClick={handleModalDeleteProject}
          >
            Удалить
          </button>
        </div>
        <input
          className="ModalEditProject__Input Modal__Block__Input"
          required
          placeholder="Write heading"
          type="text"
          value={value?.title || ""}
          minLength={4}
          onChange={(event) =>
            setValue({ ...value, title: event.target.value })
          }
        />
        <input
          className="ModalEditProject__Input Modal__Block__Input"
          placeholder="Write backgroundLink"
          type="text"
          value={value?.backgroundLink || ""}
          minLength={4}
          onChange={(event) =>
            setValue({ ...value, backgroundLink: event.target.value })
          }
        />
        <button
          className="ModalEditProject__Button Modal__Block__Button"
          type="submit"
        >
          Edit
        </button>
        <button
          className="ModalEditProject__Button Modal__Block__Button"
          onClick={props.changeIsAdd}
        >
          Cancel
        </button>
      </form>
    </div>
  ) : null;
};
