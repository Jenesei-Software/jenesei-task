import { useState } from "react";

import { Project, Task } from "../../../redux/projects/interfaces";
import { ModalTask } from "../../../modals/modal-task/organelles/modal-task";

import "../styles/tasks-item.css";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../redux/projects/actions";

interface AdditionalProps {
  projectNumber: string;
  listName: keyof Project;
}

export const TasksItem = (props: Task & AdditionalProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const changeIsModal = () => {
    setIsModal(!isModal);
  };

  const handleIsCheck = () => {
    dispatch(
      updateTask(
        props.projectNumber,
        props.taskNumber,
        {
          isCheck: !props.isCheck,
        },
        props.listName
      )
    );
  };

  const handleDelete = () => {
    dispatch(deleteTask(props.projectNumber, props.taskNumber, props.listName));
  };
  return (
    <div className="TasksItem">
      {isModal && props.projectNumber && (
        <ModalTask
          changeIsModal={changeIsModal}
          projectNumber={props.projectNumber}
          value={props}
          listName={props.listName}
        />
      )}
      <input type="checkbox" onChange={handleIsCheck} checked={props.isCheck} />
      <div className="TasksItem__Title" onDoubleClick={() => setIsModal(true)}>
        {props.heading}
      </div>
      <svg
        className="TasksItem__Icon"
        onClick={handleDelete}
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    </div>
  );
};
