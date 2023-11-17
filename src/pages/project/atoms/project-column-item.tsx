import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";

import {
  CurrentStatusList,
  PriorityStatusList,
  Task,
} from "@stores/projects/interfaces";
import { ModalTask } from "@modules/modal-task/organelles/modal-task";
import { updateTask } from "@stores/projects/actions";
import { countNestedComments } from "@functions/count-nested-comments";
import { countNestedTasks } from "@functions/count-nested-tasks";

import "../styles/project-column-item.css";

interface AdditionalProps {
  projectNumber: string;
  listName: string;
  index: number;
  changeIsDropDisabledModal: () => void;
  isDropDisabled: boolean;
  fullName: string;
  orientation: string;
  searchStateQuery: string;
  isFirstParent?: boolean;
}

export const ProjectColumnItem = (props: Task & AdditionalProps) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const changeIsModal = () => {
    setIsModal(!isModal);
    props.changeIsDropDisabledModal();
  };

  const handleIsCheck = () => {
    dispatch(
      updateTask(props.projectNumber, props.taskNumber, props.listName, {
        isCheck: !props.isCheck,
        expirationDate: moment(new Date()),
      })
    );
  };
  return (
    <Draggable
      isDragDisabled={props.isDropDisabled}
      draggableId={JSON.stringify({
        listName: undefined,
        taskNumber: props.taskNumber,
      })}
      index={props.index}
    >
      {(provided, snapshot) => {
        return (
          <div
            className="ProjectColumnItem"
            ref={provided.innerRef}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            {isModal && props.projectNumber && (
              <ModalTask
                searchStateQuery={props.searchStateQuery}
                orientation={props.orientation}
                isDropDisabled={props.isDropDisabled}
                changeIsModal={changeIsModal}
                projectNumber={props.projectNumber}
                value={props}
                listName={props.listName}
                fullName={props.fullName}
              />
            )}
            <div className="ProjectColumnItem__Info" onClick={handleIsCheck}>
              <div className="ProjectColumnItem__Info__Status">
                {props.priorityStatus && (
                  <div
                    className="ProjectColumnItem__Info__Status__PriorityStatus"
                    style={{
                      backgroundColor:
                        PriorityStatusList[props.priorityStatus].color,
                    }}
                  />
                )}
                {props.currentStatus && (
                  <div
                    className="ProjectColumnItem__Info__Status__CurrentStatus"
                    style={{
                      backgroundColor:
                        CurrentStatusList[props.currentStatus].color,
                    }}
                  />
                )}
              </div>
              <div
                className="ProjectColumnItem__Info__Title"
                style={{
                  textDecoration: props.isCheck ? "line-through" : "none",
                }}
              >
                {props.heading}
              </div>
              <div className="ProjectColumnItem__Info__Bar">
                {props.comments && props.comments.length !== 0 && (
                  <div className="ProjectColumnItem__Info__Bar__Comments">
                    <div className="ProjectColumnItem__Info__Bar__Comments__Title">
                      {countNestedComments(props.comments)}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g opacity="0.2">
                        <rect
                          opacity="0.01"
                          width="20"
                          height="20"
                          fill="black"
                        />
                        <path
                          d="M10 9.99992C10.4603 9.99992 10.8334 9.62682 10.8334 9.16659C10.8334 8.70635 10.4603 8.33325 10 8.33325C9.53978 8.33325 9.16669 8.70635 9.16669 9.16659C9.16669 9.62682 9.53978 9.99992 10 9.99992Z"
                          fill="black"
                        />
                        <path
                          d="M13.3333 9.99992C13.7936 9.99992 14.1667 9.62682 14.1667 9.16659C14.1667 8.70635 13.7936 8.33325 13.3333 8.33325C12.8731 8.33325 12.5 8.70635 12.5 9.16659C12.5 9.62682 12.8731 9.99992 13.3333 9.99992Z"
                          fill="black"
                        />
                        <path
                          d="M6.66665 9.99992C7.12688 9.99992 7.49998 9.62682 7.49998 9.16659C7.49998 8.70635 7.12688 8.33325 6.66665 8.33325C6.20641 8.33325 5.83331 8.70635 5.83331 9.16659C5.83331 9.62682 6.20641 9.99992 6.66665 9.99992Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.16669 2.5H15.8334C17.2141 2.5 18.3334 3.61929 18.3334 5V13.3333C18.3334 14.714 17.2141 15.8333 15.8334 15.8333H7.12502C6.96418 15.8271 6.80499 15.8677 6.66669 15.95L2.92502 18.2167C2.79639 18.293 2.64959 18.3333 2.50002 18.3333C2.35686 18.3329 2.21623 18.2956 2.09169 18.225C1.82961 18.0777 1.66721 17.8006 1.66669 17.5V5C1.66669 3.61929 2.78598 2.5 4.16669 2.5ZM15.8334 14.1667C16.2936 14.1667 16.6667 13.7936 16.6667 13.3333V5C16.6667 4.53976 16.2936 4.16667 15.8334 4.16667H4.16669C3.70645 4.16667 3.33335 4.53976 3.33335 5V16.025L5.83335 14.525C6.22326 14.2902 6.66987 14.1663 7.12502 14.1667H15.8334Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                )}
                {props.tasks && props.tasks.length !== 0 && (
                  <div className="ProjectColumnItem__Info__Bar__Comments">
                    <div className="ProjectColumnItem__Info__Bar__Comments__Title">
                      {countNestedTasks(props.tasks)}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g opacity="0.2">
                        <rect
                          opacity="0.01"
                          width="20"
                          height="20"
                          fill="black"
                        />
                        <path
                          d="M7.74167 17.5C6.35094 17.4934 5.02105 16.929 4.05 15.9334C3.08641 15.0201 2.5256 13.7611 2.4912 12.4339C2.45681 11.1067 2.95167 9.82034 3.86667 8.85838L10 2.66672C10.6619 2.00606 11.5651 1.64477 12.5 1.66672C13.5011 1.67013 14.4589 2.07546 15.1583 2.79172C16.5926 4.17263 16.6483 6.45063 15.2833 7.90005L9.11667 14.0917C8.7177 14.4934 8.17446 14.7185 7.60833 14.7167C6.99665 14.7175 6.41061 14.4711 5.98333 14.0334C5.10353 13.1816 5.07379 11.7801 5.91667 10.8917L11.6083 5.17505C11.9425 4.95309 12.3875 5.00078 12.667 5.28852C12.9466 5.57626 12.9815 6.02237 12.75 6.35005L7.05833 12.0667C6.86088 12.3046 6.89054 12.6569 7.125 12.8584C7.24226 12.9765 7.40034 13.0451 7.56667 13.05C7.69111 13.0518 7.81112 13.0038 7.9 12.9167L14.0583 6.72505C14.7776 5.92599 14.7219 4.69744 13.9333 3.96672C13.2024 3.20784 12.0057 3.15295 11.2083 3.84172L5.05 10C4.44516 10.6497 4.12441 11.5137 4.15882 12.4007C4.19323 13.2876 4.57998 14.1242 5.23333 14.725C5.88864 15.4044 6.78951 15.7917 7.73333 15.8C8.54697 15.8067 9.32971 15.4888 9.90833 14.9167L16.0667 8.72505C16.3911 8.39828 16.9191 8.39642 17.2458 8.72088C17.5726 9.04535 17.5745 9.57328 17.25 9.90005L11.0917 16.0917C10.2085 16.9905 9.0018 17.4978 7.74167 17.5Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <svg
              className="ProjectColumnItem__Icon"
              onClick={changeIsModal}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_4_82"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_4_82)">
                <path
                  d="M6 14C5.45 14 4.97917 13.8042 4.5875 13.4125C4.19583 13.0208 4 12.55 4 12C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10C6.55 10 7.02083 10.1958 7.4125 10.5875C7.80417 10.9792 8 11.45 8 12C8 12.55 7.80417 13.0208 7.4125 13.4125C7.02083 13.8042 6.55 14 6 14ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM18 14C17.45 14 16.9792 13.8042 16.5875 13.4125C16.1958 13.0208 16 12.55 16 12C16 11.45 16.1958 10.9792 16.5875 10.5875C16.9792 10.1958 17.45 10 18 10C18.55 10 19.0208 10.1958 19.4125 10.5875C19.8042 10.9792 20 11.45 20 12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14Z"
                  fill="#49454E"
                />
              </g>
            </svg>
          </div>
        );
      }}
    </Draggable>
  );
};
