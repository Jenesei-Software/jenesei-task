import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import moment from "moment";

import "../styles/modal-new-task.css";

import { addTask } from "../../../redux/projects/actions";
import { Task } from "../../../redux/projects/interfaces";

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
    dateOfCreation: moment(new Date(), "ddd MMM DD YYYY HH:mm:ss ZZ"),
    expirationDate: moment(new Date(), "ddd MMM DD YYYY HH:mm:ss ZZ"),
    task: [],
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
        className="ModalNewTask"
        onSubmit={(e) => {
          e.preventDefault();
          handleModalNewTask();
        }}
      >
        <div className="ModalNewTask__Title">Add Task</div>
        <input
          ref={inputRef}
          className="ModalNewTask__Input"
          required
          placeholder="heading"
          type="text"
          value={value.heading}
          minLength={4}
          onChange={(event) =>
            setValue({ ...value, heading: event.target.value })
          }
        />
        <button className="ModalNewTask__Button" type="submit">
          Create
        </button>
        <button className="ModalNewTask__Button" onClick={props.changeIsAdd}>
          Cancel
        </button>
      </form>
    </div>
  );
};
