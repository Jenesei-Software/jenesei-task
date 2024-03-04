import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ProjectHeader } from "../molecules/project-header";
import { ProjectColumn } from "../molecules/project-column";

import { ModalNewTask } from "@modules/modal-new-task/organelles/modal-new-task";
import { findProjectIndexByNumber } from "@functions/find-project-index-by-number";
import { findTaskRecursively } from "@functions/find-task-recursively";
import useScreenOrientation from "@functions/use-screen-orientation";
import { RootState } from "@stores/store";
import { Task } from "@stores/projects/interfaces";
import { moveColumns, moveTask } from "@stores/projects/actions";

import { StyleProject, StyleProjectColumns } from "./project.styles";

export const Project = () => {
  const dispatch = useDispatch();
  const { projectNumber } = useParams();
  const orientation = useScreenOrientation();

  const [type, setType] = useState<string | null>(null);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number | null>(null);

  const [isDropDisabled, setIsDropDisabled] = useState<boolean>(false);
  const [isDropDisabledModal, setIsDropDisabledModal] =
    useState<boolean>(false);

  const projectState = useSelector((state: RootState) => state.projectsState);
  const searchState = useSelector((state: RootState) => state.searchState);

  const changeIsAdd = (type?: string) => {
    if (type) setType(type);
    setIsAdd(!isAdd);
  };
  const changeIsDropDisabledModal = () => {
    setIsDropDisabledModal(!isDropDisabledModal);
  };
  const onDragEnd = (result: DropResult) => {
    if (!result.destination || projectIndex === null) {
      return;
    }
    const { taskNumber: resultId } = JSON.parse(result.draggableId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { listName: listNameStart} = JSON.parse(
      result.source.droppableId
    );
    const { listName: listNameEnd, taskNumber: taskNumberEnd } = JSON.parse(
      result.destination.droppableId
    );
    const index = result.destination.index;
    const project = projectState.projects[projectIndex];
    if (projectNumber)
      if (listNameStart === "droppable-lists") {
        const indexStart = result.source.index;
        const indexEnd = result.destination.index;
        dispatch(moveColumns(projectNumber, indexStart, indexEnd));
      } else if (projectIndex !== null) {
        if (project && project.columns[listNameStart]) {
          const taskList = project.columns[listNameStart].list as Task[];
          const taskToMove = findTaskRecursively(taskList, resultId);

          if (taskToMove) {
            dispatch(
              moveTask(
                projectNumber,
                taskToMove,
                listNameStart,
                listNameEnd,
                taskNumberEnd,
                index
              )
            );
          }
        }
      }
  };

  useEffect(() => {
    if (projectNumber && projectState.projects) {
      const foundProjectIndex = findProjectIndexByNumber(
        projectState.projects,
        projectNumber
      );
      if (foundProjectIndex !== -1) setProjectIndex(foundProjectIndex);
    }
  }, [projectNumber, projectState]);
  useEffect(() => {
    //When search is running, mobile mode is on or a fashion window is open
    if (
      searchState.query ||
      orientation === "portrait" ||
      isDropDisabledModal
    ) {
      setIsDropDisabled(true);
    } else {
      setIsDropDisabled(false);
    }
  }, [searchState, orientation, isDropDisabledModal]);

  return projectNumber &&
    projectIndex !== null &&
    projectState.projects[projectIndex] &&
    projectState.searchProjects[projectIndex] ? (
    <StyleProject>
      {isAdd && type && projectNumber && (
        <ModalNewTask
          changeIsAdd={changeIsAdd}
          projectNumber={projectNumber}
          listName={type}
        />
      )}
      {projectNumber && projectIndex !== null && (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Jen. Task - {projectState.projects[projectIndex]?.title}
            </title>
          </Helmet>
          <ProjectHeader
            project={projectState.projects[projectIndex]}
            title={projectState.projects[projectIndex]?.title}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            {/* Columns  Droppable*/}
            <Droppable
              // isDropDisabled={isDropDisabled}
              droppableId={JSON.stringify({
                listName: "droppable-lists",
                taskNumber: undefined,
              })}
              type="LIST"
              direction="horizontal"
              
            >
              {/* Columns Draggable */}
              {(provided) => (
                <StyleProjectColumns
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {orientation === "portrait" ? (
                    <Swiper
                      modules={[Pagination, A11y]}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      slidesPerView={'auto'}
                    >
                      {Object.entries(
                        projectState.searchProjects[projectIndex].columns
                      ).map(([listName, column], index) => (
                        <SwiperSlide key={listName}>
                          <Draggable
                            isDragDisabled={isDropDisabled}
                            key={listName}
                            draggableId={JSON.stringify({
                              listName: listName,
                              taskNumber: undefined,
                            })}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <ProjectColumn
                                  searchStateQuery={searchState.query}
                                  orientation={orientation}
                                  changeIsDropDisabledModal={changeIsDropDisabledModal}
                                  isDropDisabled={true}
                                  snapshot={snapshot}
                                  provided={provided}
                                  listName={listName}
                                  projectNumber={projectNumber}
                                  changeIsAdd={changeIsAdd}
                                  column={column}
                                />
                              );
                            }}
                          </Draggable>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    Object.entries(
                      projectState.searchProjects[projectIndex].columns
                    ).map(([listName, column], index) => (
                      <Draggable
                        isDragDisabled={isDropDisabled}
                        key={listName}
                        draggableId={JSON.stringify({
                          listName: listName,
                          taskNumber: undefined,
                        })}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <ProjectColumn
                              searchStateQuery={searchState.query}
                              orientation={orientation}
                              changeIsDropDisabledModal={changeIsDropDisabledModal}
                              isDropDisabled={isDropDisabled}
                              snapshot={snapshot}
                              provided={provided}
                              listName={listName}
                              projectNumber={projectNumber}
                              changeIsAdd={changeIsAdd}
                              column={column}
                            />
                          );
                        }}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </StyleProjectColumns>
              )}
            </Droppable>
          </DragDropContext>
        </>
      )}
    </StyleProject>
  ) : null;
};
