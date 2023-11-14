import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/modal-edit-project.css";

import { Project } from "@stores/projects/interfaces";
import { deleteProject, updateProject } from "@stores/projects/actions";
import { pathName } from "@stores/path-name";
import ReactDOM from "react-dom";

interface IModalEditProject {
  changeIsAdd: () => void;
  project: Project;
}
export const ModalEditProject = (props: IModalEditProject) => {
  const navigate = useNavigate();
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
    if (value) dispatch(deleteProject(value.projectNumber));
    navigate(`/${pathName.project.title}`);
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
  return value
    ? ReactDOM.createPortal(
        <div className="Modal__Fixed" onClick={() => props.changeIsAdd()}>
          <form
            className="ModalEditProject Modal__Block"
            onClick={(e) => e.stopPropagation()}
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
                Delete
              </button>
            </div>
            <input
              className="ModalEditProject__Input Modal__Block__Input"
              required
              placeholder="Write heading"
              type="text"
              value={value?.title || ""}
              minLength={4}
              maxLength={40}
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
        </div>,
        document.body
      )
    : null;
};
