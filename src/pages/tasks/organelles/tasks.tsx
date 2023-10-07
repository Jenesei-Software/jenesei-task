import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { Helmet } from "react-helmet";

import { RootState } from "../../../redux/store";
import { Project, Task } from "../../../redux/projects/interfaces";
import { TasksItem } from "../molecules/tasks-item";
import { ModalNewTask } from "../../../modules/modal-new-task/organelles/modal-new-task";
import { moveColumns, moveTask } from "../../../redux/projects/actions";
import { TasksHeader } from "../molecules/tasks-header";
import { TasksItemAdd } from "../molecules/tasks-item-add";

import "../styles/tasks.css";

const findProjectIndexByNumber = (
  projects: Project[],
  projectNumber: string
): number => {
  return projects.findIndex(
    (project: Project) => project.projectNumber === projectNumber
  );
}
const findTaskRecursively = (tasks: Task[], taskId: string): Task | null => {
  for (const task of tasks) {
    if (task.taskNumber === taskId) {
      return task;
    }

    if (task.task && task.task.length) {
      const found = findTaskRecursively(task.task, taskId);
      if (found) {
        return found;
      }
    }
  }
  return null;
};
export const Tasks = () => {
  const dispatch = useDispatch();
  const { projectNumber } = useParams();
  const [type, setType] = useState<string>("queue");
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const projectState = useSelector((state: RootState) => state.projectsState);
  const changeIsAdd = (type?: string) => {
    if (type) setType(type);
    setIsAdd(!isAdd);
  };
  const onDragEnd = (result: DropResult) => {
    if (!result.destination || projectIndex === null) {
      return;
    }
    const { taskNumber: resultId } = JSON.parse(result.draggableId);
    const { listName: listNameStart, taskNumber: taskNumberStart } = JSON.parse(result.source.droppableId);
    const { listName: listNameEnd, taskNumber: taskNumberEnd } = JSON.parse(result.destination.droppableId);
    const index = result.destination.index;
    const project = projectState.projects[projectIndex];
    if (projectNumber)
      if (listNameStart === "droppable-lists") {
        const indexStart = result.source.index;
        const indexEnd = result.destination.index;
        dispatch(
          moveColumns(projectNumber, indexStart, indexEnd)
        );
      } else if (projectIndex !== null) {
        if (project && project.columns[listNameStart]) {
          const taskList = project.columns[listNameStart] as Task[];
          const taskToMove = findTaskRecursively(taskList, resultId);

          if (taskToMove) {
            dispatch(
              moveTask(projectNumber, taskToMove, listNameStart, listNameEnd, taskNumberEnd, index)
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
      if (foundProjectIndex !== -1)
        setProjectIndex(foundProjectIndex);
    }
  }, [projectNumber, projectState]);
  return (
    <div className="Tasks">
      {isAdd && projectNumber && (
        <ModalNewTask
          changeIsAdd={changeIsAdd}
          projectNumber={projectNumber}
          listName={type}
        />
      )}
      {projectNumber && projectIndex !== null && <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jen Task - {projectState.projects[projectIndex]?.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <TasksHeader projectNumber={projectNumber} title={projectState.projects[projectIndex]?.title} />
        <DragDropContext onDragEnd={onDragEnd}>
          {/* Columns  Droppable*/}
          <Droppable droppableId={JSON.stringify({ listName: "droppable-lists", taskNumber: undefined })} type="LIST" direction="horizontal">
            {/* Columns Draggable */}
            {(provided) => (
              <div className="Tasks__List" ref={provided.innerRef} {...provided.droppableProps}>
                {
                  Object.entries(projectState.projects[projectIndex].columns).map(([listName, tasks], index) =>
                    <Draggable key={listName} draggableId={JSON.stringify({ listName: listName, taskNumber: undefined })} index={index} >
                      {(provided, snapshot) => {
                        return (
                          <div ref={provided.innerRef} className="Tasks__List__Item"
                            //@ts-ignore
                            snapshot={snapshot}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                            }}
                          >
                            <div className="Tasks__List__Item__Title">{listName}</div>
                            {/* Tasks  Droppable*/}
                            <Droppable droppableId={JSON.stringify({ listName: listName, taskNumber: undefined })} type="TASK">
                              {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="Tasks__List__Item__List">
                                  {tasks.map((task: Task, index: number) => (
                                    // Task Draggable
                                    <TasksItem
                                      {...task}
                                      key={task.taskNumber}
                                      projectNumber={projectNumber}
                                      listName={listName}
                                      index={index}
                                    />
                                  ))}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                            <TasksItemAdd title="Add a Task" onClick={() => changeIsAdd(listName)} />
                          </div>
                        );
                      }}

                    </Draggable>
                  )
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </>}
    </div>
  );
};
