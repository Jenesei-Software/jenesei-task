import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Droppable } from "react-beautiful-dnd";

import {
  CurrentStatus,
  PriorityStatus,
  Task,
} from "../../../stores/projects/interfaces";
import { ModalNewTask } from "../../modal-new-task/organelles/modal-new-task";
import { deleteTask, updateTask } from "../../../stores/projects/actions";
import { ModalTaskFile, useFiles } from "../molecules/modal-task-file";
import { ModalTaskComments } from "../molecules/modal-task-comments";
import { ProjectColumnItem } from "../../../pages/project/atoms/project-column-item";

import "../styles/modal-task.css";
import { getTimeAtWork } from "../../../functions/get-time-at-work";
import ReactDOM from "react-dom";

interface IModalTask {
  changeIsModal: () => void;
  projectNumber: string;
  value: Task;
  listName: string;
  changeIsChildrenView: () => void;
  isChildrenView: boolean;
  fullName: string
}
export const ModalTask = (props: IModalTask) => {
  const dispatch = useDispatch();
  const [isChildrenView, setIsChildrenView] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [value, setValue] = useState<Task | null>(null);
  const { files, setFiles, onAddFiles, onRemoveFile, onResetFiles } =
    useFiles();
  const changeIsAdd = () => {
    setIsAdd(!isAdd);
  };
  const changeIsChildrenView = () => {
    setIsChildrenView(!isChildrenView);
  };
  const saveValue = () => {
    if (value)
      dispatch(
        updateTask(props.projectNumber, value.taskNumber, props.listName, {
          priorityStatus: value.priorityStatus,
          currentStatus: value.currentStatus,
          heading: value.heading,
          description: value.description,
          expirationDate: moment(new Date()),
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
    if (value)
      dispatch(
        deleteTask(props.projectNumber, value.taskNumber, props.listName)
      );
    props.changeIsModal()

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
          <div className="ModalTask Modal__Block">
            <div className="ModalTask__Head">
              <div className="ModalTask__Title Modal__Block__Title">
                {props.listName} - {props.fullName}
              </div>
              <button onClick={handleDelete} className="Modal__Block__Button">
                Delete
              </button>
            </div>
            <div className="ModalTask__Info">
              <div className="ModalTask__General">
                <div className="ModalTask__General__Sub">
                  <div className="ModalTask__Heading">
                    <div className="ModalTask__SubTitle">Heading</div>
                    <input
                      className="ModalTask__Input Modal__Block__Input"
                      required
                      placeholder="Write heading"
                      type="text"
                      value={value.heading || ""}
                      minLength={4}
                      maxLength={40}
                      onChange={(event) =>
                        setValue({ ...value, heading: event.target.value })
                      }
                    />
                  </div>
                  <div className="ModalTask__Description">
                    <div className="ModalTask__SubTitle">Description</div>
                    <input
                      className="ModalTask__Input Modal__Block__Input"
                      required
                      placeholder="Write description"
                      type="text"
                      value={value.description || ""}
                      minLength={4}
                      maxLength={40}
                      onChange={(event) =>
                        setValue({ ...value, description: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="ModalTask__General__Sub">
                  <div className="ModalTask__DateOfCreation">
                    <div className="ModalTask__SubTitle">Date Of Creation</div>
                    <div className="ModalTask__SubInfo">
                      {moment(value.dateOfCreation).calendar()}
                    </div>
                  </div>
                  <div className="ModalTask__ExpirationDate">
                    <div className="ModalTask__SubTitle">Expiration Date</div>
                    <div className="ModalTask__SubInfo">
                      {moment(value.expirationDate).calendar()}
                    </div>
                  </div>
                  <div className="ModalTask__TimeAtWork">
                    <div className="ModalTask__SubTitle">Time at work</div>
                    <div className="ModalTask__SubInfo">
                      {getTimeAtWork(value.dateOfCreation)}
                    </div>
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
                </div>
              </div>
              <div className="ModalTask__AttachedFiles">
                <div className="ModalTask__SubTitle">Attached Files</div>
                {value.taskNumber && (
                  <ModalTaskFile
                    id={value.taskNumber}
                    files={files}
                    onAddFiles={onAddFiles}
                    onRemoveFile={onRemoveFile}
                    onResetFiles={onResetFiles}
                    multiple
                  ></ModalTaskFile>
                )}
              </div>
              <button
                onClick={saveValue}
                className="ModalTask__Button Modal__Block__Button"
                type="submit"
              >
                Save
              </button>
              <div className="ModalTask__ListOfSubStacks">
                <div className="ModalTask__SubTitle">List of subtasks </div>
                <button
                  className="Modal__Block__Button"
                  onClick={() => changeIsAdd()}
                >
                  Add
                </button>
                {/* Tasks  Droppable*/}
                {props.value?.tasks && props.value?.tasks.length !== 0 && (
                  <Droppable
                    isDropDisabled={isChildrenView}
                    droppableId={JSON.stringify({
                      listName: props.listName,
                      taskNumber: value.taskNumber,
                    })}
                    type="TASK"
                    direction="vertical"
                  >
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="ModalTask__ListOfSubStacks__List"
                      >
                        {props.value?.tasks?.map((e: Task, index: number) => (
                          // Task Draggable
                          <ProjectColumnItem
                            {...e}
                            key={e.taskNumber}
                            projectNumber={props.projectNumber}
                            listName={props.listName}
                            index={index}
                            changeIsChildrenView={changeIsChildrenView}
                            isChildrenView={isChildrenView}
                            fullName={props.fullName + " - " + e.heading}
                          />
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                )}
              </div>
              <div className="ModalTask__Comments">
                <ModalTaskComments
                  projectNumber={props.projectNumber}
                  taskNumber={value.taskNumber}
                  listName={props.listName}
                />

                {value.comments && value.comments.length !== 0 && (
                  <div className="ModalTask__Comments__Children">
                    {value.comments.map((e) => (
                      <ModalTaskComments
                        key={e.commentNumber}
                        projectNumber={props.projectNumber}
                        taskNumber={value.taskNumber}
                        listName={props.listName}
                        comment={e}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              className="ModalTask__Button__Cancel Modal__Block__Button"
              onClick={props.changeIsModal}
            >
              Cancel
            </button>
          </div>
        </div>
        {isAdd && props.projectNumber &&
          ReactDOM.createPortal(
            <ModalNewTask
              changeIsAdd={changeIsAdd}
              listName={props.listName}
              projectNumber={props.projectNumber}
              taskNumber={value.taskNumber}
            />,
            document.body
          )}
      </>
    )
  );
};
