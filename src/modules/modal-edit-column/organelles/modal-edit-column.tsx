import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "../styles/modal-edit-column.css";

import { Column } from "../../../store/projects/interfaces";
import { updateColumn } from "../../../store/projects/actions";

interface IModalEditColumn {
  changeIsEdit: () => void;
  projectNumber: string
  column: Column
  listName: string
}
export const ModalEditColumn = (props: IModalEditColumn) => {
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleModalEditColumn = () => {
    if (title) {
      dispatch(updateColumn(props.projectNumber, props.listName, title, description || undefined));
      props.changeIsEdit();
    }
  };
  useEffect(() => {
    setTitle(props.listName)
    if (props.column.description)
      setDescription(props.column.description);

    return () => {
      setTitle(null);
      setDescription(null)
    };
  }, [props]);
  return (
    <div className="Modal__Fixed">
      <form
        className="ModalEditColumn"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalEditColumn();
        }}
      >
        <div className="ModalEditColumn__Title">Edit of Columns</div>
        <input
          className="ModalEditColumn__Input"
          required
          placeholder="heading"
          type="text"
          value={title || ""}
          minLength={4}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="ModalEditColumn__Input"
          placeholder="description"
          type="text"
          value={description || ""}
          minLength={4}
          maxLength={40}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="ModalEditColumn__Button" type="submit">
          Create
        </button>
        <button className="ModalEditColumn__Button" onClick={props.changeIsEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};