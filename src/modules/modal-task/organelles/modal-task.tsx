import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Droppable } from "react-beautiful-dnd";

import {
  CurrentStatus,
  PriorityStatus,
  Task,
} from "../../../store/projects/interfaces";
import { ModalNewTask } from "../../modal-new-task/organelles/modal-new-task";
import { deleteTask, updateTask } from "../../../store/projects/actions";
import { ModalTaskFile, useFiles } from "../molecules/modal-task-file";
import { ModalTaskComments } from "../molecules/modal-task-comments";

import "../styles/modal-task.css";
import { ProjectColumnItem } from "../../../pages/project/atoms/project-column-item";

interface IModalTask {
  changeIsModal: () => void;
  projectNumber: string;
  value: Task;
  listName: string;
}
export const ModalTask = (props: IModalTask) => {
  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [value, setValue] = useState<Task | null>(null);
  const { files, setFiles, onAddFiles, onRemoveFile, onResetFiles } =
    useFiles();
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  const saveValue = () => {
    if (value)
      dispatch(
        updateTask(props.projectNumber, value.taskNumber, props.listName, {
          priorityStatus: value.priorityStatus,
          currentStatus: value.currentStatus,
          heading: value.heading,
          description: value.description,
          expirationDate: moment(new Date(), "ddd MMM DD YYYY HH:mm:ss ZZ"),
        })
      );
    props.changeIsModal();
  };
  const handlePriorityStatus = (priorityStatus: PriorityStatus) => {
    if (value) setValue({ ...value, priorityStatus: priorityStatus });
  };
  const handleCurrentStatus = (currentStatus: CurrentStatus) => {
    if (value) setValue({ ...value, currentStatus: currentStatus });
  };
  const handleDelete = () => {
    if (value) dispatch(deleteTask(props.projectNumber, value.taskNumber, props.listName));
  };
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
      if (props.value.attachedFiles) setFiles(props.value.attachedFiles);
    }
    return () => {
      setValue(null);
    };
  }, [props.value]);
  return (
    value && (
      <>
        <div className="Modal__Fixed">
          <div className="ModalTask">
            <svg
              className="ModalTask__Icon"
              onClick={handleDelete}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
            <div className="ModalTask__Title">Task - {value.heading}</div>
            <div className="ModalTask__DateOfCreation">
              <div className="ModalTask__SubTitle">Date Of Creation</div>
              {String(value.dateOfCreation)}
            </div>
            <div className="ModalTask__ExpirationDate">
              <div className="ModalTask__SubTitle">Expiration Date</div>
              {String(value.expirationDate)}
            </div>
            <div className="ModalTask__Heading">
              <div className="ModalTask__SubTitle">Heading</div>
              <input
                className="ModalTask__Input"
                required
                placeholder="heading"
                type="text"
                value={value.heading || ""}
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
                value={value.description || ""}
                minLength={4}
                onChange={(event) =>
                  setValue({ ...value, description: event.target.value })
                }
              />
            </div>
            <div className="ModalTask__PriorityStatus">
              <div className="ModalTask__SubTitle">PriorityStatus</div>
              <div className="ModalTask__List">
                <div
                  className={
                    value.priorityStatus === "short"
                      ? "ModalTask__List__Item__Active ModalTask__List__Item"
                      : "ModalTask__List__Item"
                  }
                  onClick={() => handlePriorityStatus("short")}
                >
                  short
                </div>
                <div
                  className={
                    value.priorityStatus === "average"
                      ? "ModalTask__List__Item__Active ModalTask__List__Item"
                      : "ModalTask__List__Item"
                  }
                  onClick={() => handlePriorityStatus("average")}
                >
                  average
                </div>
                <div
                  className={
                    value.priorityStatus === "high"
                      ? "ModalTask__List__Item__Active ModalTask__List__Item"
                      : "ModalTask__List__Item"
                  }
                  onClick={() => handlePriorityStatus("high")}
                >
                  high
                </div>
              </div>
            </div>
            <div className="ModalTask__CurrentStatus">
              <div className="ModalTask__SubTitle">Current Status</div>
              <div className="ModalTask__List">
                <div
                  className={
                    value.currentStatus === "wait"
                      ? "ModalTask__List__Item__Active ModalTask__List__Item"
                      : "ModalTask__List__Item"
                  }
                  onClick={() => handleCurrentStatus("wait")}
                >
                  wait
                </div>
                <div
                  className={
                    value.currentStatus === "work"
                      ? "ModalTask__List__Item__Active ModalTask__List__Item"
                      : "ModalTask__List__Item"
                  }
                  onClick={() => handleCurrentStatus("work")}
                >
                  work
                </div>
                <div
                  className={
                    value.currentStatus === "done"
                      ? "ModalTask__List__Item__Active ModalTask__List__Item"
                      : "ModalTask__List__Item"
                  }
                  onClick={() => handleCurrentStatus("done")}
                >
                  done
                </div>
              </div>
            </div>
            <div className="ModalTask__AttachedFiles">
              <div className="ModalTask__SubTitle">Attached Files</div>
              {value.taskNumber && <ModalTaskFile
                id={value.taskNumber}
                files={files}
                onAddFiles={onAddFiles}
                onRemoveFile={onRemoveFile}
                onResetFiles={onResetFiles}
                multiple
              >
              </ModalTaskFile>}
            </div>
            <button
              onClick={saveValue}
              className="ModalTask__Button"
              type="submit"
            >
              Save
            </button>
            <div className="ModalTask__ListOfSubStacks">
              <div className="ModalTask__SubTitle">List of subtasks </div>
              <button onClick={() => changeIsAdd()}>Add</button>
              {/* Tasks  Droppable*/}
              <Droppable droppableId={JSON.stringify({ listName: props.listName, taskNumber: value.taskNumber })} type="TASK" direction="vertical">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="ModalTask__ListOfSubStacks__List">
                    {props.value?.task?.map((e: Task, index: number) => (
                      // Task Draggable
                      <ProjectColumnItem
                        {...e}
                        key={e.taskNumber}
                        projectNumber={props.projectNumber}
                        listName={props.listName}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            <div className="ModalTask__Comments">
              <ModalTaskComments projectNumber={props.projectNumber} taskNumber={value.taskNumber} listName={props.listName} />
              {value.comments && value.comments.map((e) =>
                <ModalTaskComments key={e.commentNumber} projectNumber={props.projectNumber} taskNumber={value.taskNumber} listName={props.listName} comment={e} />
              )}
            </div>
            <button className="ModalTask__Button" onClick={props.changeIsModal}>
              Cancel
            </button>
          </div>
        </div>
        {isAdd && props.projectNumber && (
          <ModalNewTask
            changeIsAdd={changeIsAdd}
            listName={props.listName}
            projectNumber={props.projectNumber}
            taskNumber={value.taskNumber}
          />
        )}
      </>
    )
  );
};
