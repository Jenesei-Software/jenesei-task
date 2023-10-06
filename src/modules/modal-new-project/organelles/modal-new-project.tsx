import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";

import "../styles/modal-new-project.css";

import { addProject } from "../../../redux/projects/actions";

interface IModalNewProject {
  changeIsAdd: () => void;
}
export const ModalNewProject = (props: IModalNewProject) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleModalNewProject = () => {
    if (title) {
      const ModalNewProject = {
        projectNumber: v4(),
        title: title,
        queue: [],
        development: [],
        done: [],
      };
      dispatch(addProject(ModalNewProject));
      props.changeIsAdd();
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="Modal__Fixed">
      <form
        className="ModalNewProject"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalNewProject();
        }}
      >
        <div className="ModalNewProject__Title">Heading of Project</div>
        <input
          ref={inputRef}
          className="ModalNewProject__Input"
          required
          placeholder="heading"
          type="text"
          value={title || ""}
          minLength={4}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="ModalNewProject__Button" type="submit">
          Create
        </button>
        <button className="ModalNewProject__Button" onClick={props.changeIsAdd}>
          Cancel
        </button>
      </form>
    </div>
  );
};
