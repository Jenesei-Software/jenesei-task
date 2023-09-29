import { useEffect, useState } from "react";

import { Project, Task } from "../../../redux/projects/interfaces";
import { TasksItem } from "../../../pages/tasks/molecules/tasks-item";
import { ModalNewTask } from "../../modal-new-task/organelles/modal-new-task";

import "../styles/modal-task.css";
import { updateTask } from "../../../redux/projects/actions";

interface IModalTask {
  changeIsModal: () => void;
  projectNumber: string;
  value: Task;
  listName: keyof Project;
}
export const ModalTask = (props: IModalTask) => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [value, setValue] = useState<Task | null>(null);
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  const changeValue = () => {
    dispatch(
      updateTask(
        props.projectNumber,
        props.value.taskNumber,
        {
          heading: value?.heading,
          description: value?.description,
        },
        props.listName
      )
    );
  };
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
    return () => {
      setValue(null);
    };
  }, [props.value]);
  return (
    value && (
      <div className="Modal__Fixed">
        {isAdd && props.projectNumber && (
          <ModalNewTask
            changeIsAdd={changeIsAdd}
            listName={props.listName}
            projectNumber={props.projectNumber}
            taskNumber={value.taskNumber}
          />
        )}
        <div className="ModalTask">
          <div className="ModalTask__Title">Task - {value.heading}</div>
          <div className="ModalTask__Heading">
            <div className="ModalTask__SubTitle">Heading</div>
            <input
              className="ModalTask__Input"
              required
              placeholder="heading"
              type="text"
              value={value.heading}
              minLength={4}
              onChange={(event) =>
                setValue({ ...value, heading: event.target.value })
              }
            />
          </div>
          <div className="ModalTask__Description">
            <div className="ModalTask__SubTitle">Description</div>
            <input
              className="ModalTask__Input"
              required
              placeholder="description"
              type="text"
              value={value.description}
              minLength={4}
              onChange={(event) =>
                setValue({ ...value, description: event.target.value })
              }
            />
          </div>
          <div className="ModalTask__ListOfSubStacks">
            <div className="ModalTask__SubTitle">List of subtasks </div>
            <button onClick={() => changeIsAdd()}>Add</button>
            {value?.task?.map((e: Task) => (
              <div key={e.taskNumber}>
                <TasksItem
                  taskNumber={e.taskNumber}
                  heading={e.heading}
                  dateOfCreation={e.dateOfCreation}
                  expirationDate={e.expirationDate}
                  task={e.task}
                  projectNumber={props.projectNumber}
                  listName={props.listName}
                  isCheck={e.isCheck}
                />
              </div>
            ))}
          </div>
          <div className="ModalTask__Priority">
            <div className="ModalTask__SubTitle">Priority</div>
            <div></div>
          </div>
          <div className="ModalTask__CurrentStatus">
            <div className="ModalTask__SubTitle">Current Status</div>
            <div></div>
          </div>
          <div className="ModalTask__AttachedFiles">
            <div className="ModalTask__SubTitle">Attached Files</div>
            <div></div>
          </div>
          <button className="ModalTask__Button" type="submit">
            Сохранить
          </button>
          <button className="ModalTask__Button" onClick={props.changeIsModal}>
            Cancel
          </button>
        </div>
      </div>
    )
  );
};
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
