import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/modal-edit-column.css";

import { Column } from "../../../stores/projects/interfaces";
import { deleteColumn, updateColumn } from "../../../stores/projects/actions";
import { doesColumnExist } from "../../../functions/does-сolumn-exist ";
import { RootState } from "../../../stores/store";

interface IModalEditColumn {
  changeIsEdit: () => void;
  projectNumber: string;
  column: Column;
  listName: string;
}
export const ModalEditColumn = (props: IModalEditColumn) => {
  const projectState = useSelector((state: RootState) => state.projectsState);

  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleModalEditColumn = () => {
    if (title && !doesColumnExist(props.projectNumber, title, props.listName, projectState.projects)) {
      dispatch(
        updateColumn(
          props.projectNumber,
          props.listName,
          title,
          description || undefined
        )
      );
      props.changeIsEdit();
    } else {
      console.error("A column with the same name already exists")
    }
  };
  const handleModalDeleteColumn = () => {
    dispatch(deleteColumn(props.projectNumber, props.listName));
    props.changeIsEdit();
  };
  useEffect(() => {
    setTitle(props.listName);
    if (props.column.description) setDescription(props.column.description);

    return () => {
      setTitle(null);
      setDescription(null);
    };
  }, [props]);
  return (
    <div className="Modal__Fixed">
      <form
        className="ModalEditColumn Modal__Block"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalEditColumn();
        }}
      >
        <div className="ModalEditColumn__Head">
          <div className="Modal__Block__Title">Edit of Columns</div>
          <button
            className="Modal__Block__Button"
            onClick={handleModalDeleteColumn}
          >
            Удалить
          </button>
        </div>
        <input
          className="ModalEditColumn__Input Modal__Block__Input"
          required
          placeholder="Write heading"
          type="text"
          value={title || ""}
          minLength={4}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="ModalEditColumn__Input Modal__Block__Input"
          placeholder="Write description"
          type="text"
          value={description || ""}
          minLength={4}
          maxLength={40}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          className="ModalEditColumn__Button Modal__Block__Button"
          type="submit"
        >
          Create
        </button>
        <button
          className="ModalEditColumn__Button Modal__Block__Button"
          onClick={props.changeIsEdit}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
