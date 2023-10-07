import { useEffect, useRef, useState } from "react";

import "../styles/modal-edit-column.css";


interface IModalEditColumn {
  changeIsAdd: () => void;
  projectNumber: string
}
export const ModalEditColumn = (props: IModalEditColumn) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string | null>(null);
  // const dispatch = useDispatch();
  const handleModalEditColumn = () => {
    if (title) {
      // dispatch(addColumn(props.projectNumber, title));
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
        className="ModalEditColumn"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalEditColumn();
        }}
      >
        <div className="ModalEditColumn__Title">Heading of Columns</div>
        <input
          ref={inputRef}
          className="ModalEditColumn__Input"
          required
          placeholder="heading"
          type="text"
          value={title || ""}
          minLength={4}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="ModalEditColumn__Button" type="submit">
          Create
        </button>
        <button className="ModalEditColumn__Button" onClick={props.changeIsAdd}>
          Cancel
        </button>
      </form>
    </div>
  );
};
