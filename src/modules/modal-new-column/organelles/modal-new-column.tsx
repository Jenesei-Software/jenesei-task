import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import "../styles/modal-new-column.css";

import { addColumn } from "../../../store/projects/actions";

interface IModalNewColumn {
  changeIsAdd: () => void;
  projectNumber: string
}
export const ModalNewColumn = (props: IModalNewColumn) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleModalNewColumn = () => {
    if (title) {
      dispatch(addColumn(props.projectNumber, title));
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
        className="ModalNewColumn Modal__Block"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalNewColumn();
        }}
      >
        <div className="ModalNewColumn__Title Modal__Block__Title">Add of Columns</div>
        <input
          ref={inputRef}
          className="ModalNewColumn__Input Modal__Block__Input"
          required
          placeholder="Write heading"
          type="text"
          value={title || ""}
          minLength={4}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="ModalNewColumn__Button Modal__Block__Button" type="submit">
          Create
        </button>
        <button className="ModalNewColumn__Button Modal__Block__Button" onClick={props.changeIsAdd}>
          Cancel
        </button>
      </form>
    </div>
  );
};
