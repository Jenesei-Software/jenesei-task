import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { Project, Task } from "../../../redux/projects/interfaces";
import { ModalTask } from "../../../modules/modal-task/organelles/modal-task";
import { deleteTask, updateTask } from "../../../redux/projects/actions";

import "../styles/tasks-item.css";
import { Draggable } from "react-beautiful-dnd";

interface AdditionalProps {
  projectNumber: string;
  listName: keyof Project;
  index: number
}

export const TasksItem = (props: Task & AdditionalProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const changeIsModal = () => {
    setIsModal(!isModal);
  };

  const handleIsCheck = () => {
    dispatch(
      updateTask(props.projectNumber, props.taskNumber, props.listName, {
        isCheck: !props.isCheck,
        expirationDate: moment(new Date(), "ddd MMM DD YYYY HH:mm:ss ZZ"),
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTask(props.projectNumber, props.taskNumber, props.listName));
  };
  return (
    <Draggable draggableId={props.taskNumber} index={props.index}>
      {(provided, snapshot) => {
        return (
          <div className="TasksItem" ref={provided.innerRef}
            //@ts-ignore
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}>
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
      }}
    </Draggable>
  );
};
