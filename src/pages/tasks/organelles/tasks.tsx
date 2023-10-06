import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { Helmet } from "react-helmet";

import { RootState } from "../../../redux/store";
import { Project, Task } from "../../../redux/projects/interfaces";
import { TasksItem } from "../molecules/tasks-item";
import { ModalNewTask } from "../../../modules/modal-new-task/organelles/modal-new-task";
import { moveTask } from "../../../redux/projects/actions";

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
  const [type, setType] = useState<keyof Project>("queue");
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [projectIndex, setProjectIndex] = useState<number | null>(null);
  const projectState = useSelector((state: RootState) => state.projectsState);
  const changeIsAdd = (type?: keyof Project) => {
    if (type) setType(type);
    setIsAdd(!isAdd);
  };
  const onDragEnd = (
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      if (projectIndex !== null) {
        const isKeyOfProject = (key: string): key is keyof Project => {
          return projectState.projects[projectIndex] !== null && key in projectState.projects[projectIndex];
        };
        const listNameStart = result.source.droppableId.split(' ', 2)
        const listNameEnd = result.destination.droppableId.split(' ', 2)
        const index = result.destination.index
        if (projectState.projects[projectIndex] && isKeyOfProject(listNameStart[0]) && isKeyOfProject(listNameEnd[0]) && projectState.projects[projectIndex][listNameStart[0]] && projectNumber) {
          const taskList = projectState.projects[projectIndex][listNameStart[0]] as Task[];
          const taskToMove = findTaskRecursively(taskList, result.draggableId);
          if (taskToMove) {
            dispatch(
              moveTask(projectNumber, taskToMove, listNameStart[0], listNameEnd[0], listNameEnd[1], index)
            );
          }
        }
      }
    }
  );
  useEffect(() => {
    if (projectNumber && projectState.projects) {
      const foundProjectIndex = findProjectIndexByNumber(
        projectState.projects,
        projectNumber
      );
      console.log("foundProjectIndex", foundProjectIndex)
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
      <NavLink className="ProjectListItem__Go" to={`/project`}>
        <button>Return to list of projects</button>
      </NavLink>
      {projectIndex !== null && <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jen Tasks - {projectState.projects[projectIndex]?.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="Tasks__Title">{projectState.projects[projectIndex]?.title}</div>
        {projectNumber &&
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="Tasks__List">
              <div className="Tasks__List__Item">
                <div className="Tasks__List__Item__Title">queue</div>
                <button onClick={() => changeIsAdd("queue")}>Add</button>
                <Droppable droppableId={`queue`}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="Tasks__List__Item__List">
                      {projectState.projects[projectIndex]?.queue?.map((e: Task, index: number) => (
                        <TasksItem
                          key={e.taskNumber}
                          taskNumber={e.taskNumber}
                          heading={e.heading}
                          dateOfCreation={e.dateOfCreation}
                          expirationDate={e.expirationDate}
                          task={e.task}
                          projectNumber={projectNumber}
                          listName={"queue"}
                          isCheck={e.isCheck}
                          priority={e.priority}
                          currentStatus={e.currentStatus}
                          attachedFiles={e.attachedFiles}
                          description={e.description}
                          comments={e.comments}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div className="Tasks__List__Item">
                <div className="Tasks__List__Item__Title">development</div>
                <button onClick={() => changeIsAdd("development")}>Add</button>
                <Droppable droppableId={`development`}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="Tasks__List__Item__List">
                      {projectState.projects[projectIndex]?.development?.map((e: Task, index: number) => (
                        <TasksItem
                          key={e.taskNumber}
                          taskNumber={e.taskNumber}
                          heading={e.heading}
                          dateOfCreation={e.dateOfCreation}
                          expirationDate={e.expirationDate}
                          task={e.task}
                          projectNumber={projectNumber}
                          listName={"development"}
                          isCheck={e.isCheck}
                          priority={e.priority}
                          currentStatus={e.currentStatus}
                          attachedFiles={e.attachedFiles}
                          description={e.description}
                          comments={e.comments}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div className="Tasks__List__Item">
                <div className="Tasks__List__Item__Title">done</div>
                <button onClick={() => changeIsAdd("done")}>Add</button>
                <Droppable droppableId={`done`}>
                  {(provided) => (
                    <div {...provided.droppableProps} className="Tasks__List__Item__List" ref={provided.innerRef}>
                      {projectState.projects[projectIndex]?.done?.map((e: Task, index: number) => (
                        <TasksItem
                          key={e.taskNumber}
                          taskNumber={e.taskNumber}
                          heading={e.heading}
                          dateOfCreation={e.dateOfCreation}
                          expirationDate={e.expirationDate}
                          task={e.task}
                          projectNumber={projectNumber}
                          listName={"done"}
                          isCheck={e.isCheck}
                          priority={e.priority}
                          currentStatus={e.currentStatus}
                          attachedFiles={e.attachedFiles}
                          description={e.description}
                          comments={e.comments}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </DragDropContext>
        }</>}

    </div>
  );
};
