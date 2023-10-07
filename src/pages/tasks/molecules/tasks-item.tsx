import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";

import { CurrentStatusList, PriorityList, Task, Comment } from "../../../store/projects/interfaces";
import { ModalTask } from "../../../modules/modal-task/organelles/modal-task";
import { updateTask } from "../../../store/projects/actions";

import "../styles/tasks-item.css";

const countNestedComments = (comments: Comment[]): number => {
  let count = comments.length;

  for (let comment of comments) {
    if (comment.comments) {
      count += countNestedComments(comment.comments);
    }
  }

  return count;
};

interface AdditionalProps {
  projectNumber: string;
  listName: string;
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
  return (
    <Draggable draggableId={JSON.stringify({ listName: undefined, taskNumber: props.taskNumber })} index={props.index}>
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
            <div className="TasksItem__Info" onClick={handleIsCheck}>
              <div className="TasksItem__Info__Status">
                {props.priority && <div className="TasksItem__Info__Status__Priority"
                  style={{
                    backgroundColor: PriorityList[props.priority].color
                  }}
                />}
                {props.currentStatus && <div className="TasksItem__Info__Status__CurrentStatus"
                  style={{
                    backgroundColor: CurrentStatusList[props.currentStatus].color
                  }}
                />}
              </div>
              <div className="TasksItem__Info__Title" style={{ textDecoration: props.isCheck ? "line-through" : "auto" }}>
                {props.heading}
              </div>
              <div className="TasksItem__Info__Bar">
                {
                  props.comments && <div className="TasksItem__Info__Bar__Comments">
                    <div className="TasksItem__Info__Bar__Comments__Title">
                      {countNestedComments(props.comments)}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g opacity="0.2">
                        <rect opacity="0.01" width="20" height="20" fill="black" />
                        <path d="M10 9.99992C10.4603 9.99992 10.8334 9.62682 10.8334 9.16659C10.8334 8.70635 10.4603 8.33325 10 8.33325C9.53978 8.33325 9.16669 8.70635 9.16669 9.16659C9.16669 9.62682 9.53978 9.99992 10 9.99992Z" fill="black" />
                        <path d="M13.3333 9.99992C13.7936 9.99992 14.1667 9.62682 14.1667 9.16659C14.1667 8.70635 13.7936 8.33325 13.3333 8.33325C12.8731 8.33325 12.5 8.70635 12.5 9.16659C12.5 9.62682 12.8731 9.99992 13.3333 9.99992Z" fill="black" />
                        <path d="M6.66665 9.99992C7.12688 9.99992 7.49998 9.62682 7.49998 9.16659C7.49998 8.70635 7.12688 8.33325 6.66665 8.33325C6.20641 8.33325 5.83331 8.70635 5.83331 9.16659C5.83331 9.62682 6.20641 9.99992 6.66665 9.99992Z" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.16669 2.5H15.8334C17.2141 2.5 18.3334 3.61929 18.3334 5V13.3333C18.3334 14.714 17.2141 15.8333 15.8334 15.8333H7.12502C6.96418 15.8271 6.80499 15.8677 6.66669 15.95L2.92502 18.2167C2.79639 18.293 2.64959 18.3333 2.50002 18.3333C2.35686 18.3329 2.21623 18.2956 2.09169 18.225C1.82961 18.0777 1.66721 17.8006 1.66669 17.5V5C1.66669 3.61929 2.78598 2.5 4.16669 2.5ZM15.8334 14.1667C16.2936 14.1667 16.6667 13.7936 16.6667 13.3333V5C16.6667 4.53976 16.2936 4.16667 15.8334 4.16667H4.16669C3.70645 4.16667 3.33335 4.53976 3.33335 5V16.025L5.83335 14.525C6.22326 14.2902 6.66987 14.1663 7.12502 14.1667H15.8334Z" fill="black" />
                      </g>
                    </svg>
                  </div>
                }
              </div>
            </div>
            <svg className="TasksItem__Icon" onClick={() => setIsModal(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_4_82" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_4_82)">
                <path d="M6 14C5.45 14 4.97917 13.8042 4.5875 13.4125C4.19583 13.0208 4 12.55 4 12C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10C6.55 10 7.02083 10.1958 7.4125 10.5875C7.80417 10.9792 8 11.45 8 12C8 12.55 7.80417 13.0208 7.4125 13.4125C7.02083 13.8042 6.55 14 6 14ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM18 14C17.45 14 16.9792 13.8042 16.5875 13.4125C16.1958 13.0208 16 12.55 16 12C16 11.45 16.1958 10.9792 16.5875 10.5875C16.9792 10.1958 17.45 10 18 10C18.55 10 19.0208 10.1958 19.4125 10.5875C19.8042 10.9792 20 11.45 20 12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14Z" fill="#49454E" />
              </g>
            </svg>
          </div>
        );
      }}
    </Draggable>
  );
};
