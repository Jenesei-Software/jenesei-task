import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import moment from "moment";

import "../styles/modal-new-task.css";

import { addTask } from "../../../stores/projects/actions";
import { Task } from "../../../stores/projects/interfaces";

interface IModalNewTask {
  changeIsAdd: () => void;
  projectNumber: string;
  taskNumber?: string;
  listName: string;
}
export const ModalNewTask = (props: IModalNewTask) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const DEFAULT_VALUE: Task = {
    isCheck: false,
    taskNumber: v4(),
    heading: "",
    dateOfCreation: moment(new Date()),
    expirationDate: moment(new Date()),
  };
  const [value, setValue] = useState<Task>(DEFAULT_VALUE);
  const dispatch = useDispatch();
  const handleModalNewTask = () => {
    if (value.heading) {
      dispatch(
        addTask(props.projectNumber, value, props.listName, props.taskNumber)
      );
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
        className="ModalNewTask Modal__Block"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalNewTask();
        }}
      >
        <div className="ModalNewTask__Title Modal__Block__Title">Add Task</div>
        <input
          ref={inputRef}
          className="ModalNewTask__Input Modal__Block__Input"
          required
          placeholder="Write heading"
          type="text"
          value={value.heading}
          minLength={4}
          maxLength={40}
          onChange={(event) =>
            setValue({ ...value, heading: event.target.value })
          }
        />
        <button className="ModalNewTask__Button Modal__Block__Button" type="submit">
          Create
        </button>
        <button className="ModalNewTask__Button Modal__Block__Button" onClick={props.changeIsAdd}>
          Cancel
        </button>
      </form>
    </div>
  );
};
