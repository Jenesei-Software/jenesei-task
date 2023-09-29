import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { RootState } from "../../../redux/store";
import { Project, Task } from "../../../redux/projects/interfaces";
import { TasksItem } from "../molecules/tasks-item";

import "../styles/tasks.css";
import { ModalNewTask } from "../../../modals/modal-new-task/organelles/modal-new-task";

function findProjectByNumber(
  projects: Project[],
  projectNumber: string
): Project | undefined {
  return projects.find(
    (project: Project) => project.projectNumber === projectNumber
  );
}

export const Tasks = () => {
  const { projectNumber } = useParams();
  const [type, setType] = useState<keyof Project>("queue");
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);
  const projectState = useSelector((state: RootState) => state.projectsState);
  const changeIsAdd = (type?: keyof Project) => {
    if (type) setType(type);
    setIsAdd(!isAdd);
  };
  useEffect(() => {
    if (projectNumber && projectState.projects) {
      const foundProject = findProjectByNumber(
        projectState.projects,
        projectNumber
      );
      setProject(foundProject || null);
    }
  }, [projectNumber, projectState.projects]);
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
      <div className="Tasks__Title">{project?.title}</div>
      {projectNumber && (
        <div className="Tasks__List">
          <div className="Tasks__List__Item">
            <div className="Tasks__List__Item__Title">queue</div>
            <button onClick={() => changeIsAdd("queue")}>Add</button>
            <div className="Tasks__List__Item__List">
              {project?.queue?.map((e: Task) => (
                <div key={e.taskNumber}>
                  <TasksItem
                    taskNumber={e.taskNumber}
                    heading={e.heading}
                    dateOfCreation={e.dateOfCreation}
                    expirationDate={e.expirationDate}
                    task={e.task}
                    projectNumber={projectNumber}
                    listName={"queue"}
                    isCheck={e.isCheck}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="Tasks__List__Item">
            <div className="Tasks__List__Item__Title">development</div>
            <button onClick={() => changeIsAdd("development")}>Add</button>
            <div className="Tasks__List__Item__List">
              {project?.development?.map((e: Task) => (
                <div key={e.taskNumber}>
                  <TasksItem
                    taskNumber={e.taskNumber}
                    heading={e.heading}
                    dateOfCreation={e.dateOfCreation}
                    expirationDate={e.expirationDate}
                    task={e.task}
                    projectNumber={projectNumber}
                    listName={"development"}
                    isCheck={e.isCheck}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="Tasks__List__Item">
            <div className="Tasks__List__Item__Title">done</div>
            <button onClick={() => changeIsAdd("done")}>Add</button>
            <div className="Tasks__List__Item__List">
              {project?.done?.map((e: Task) => (
                <div key={e.taskNumber}>
                  <TasksItem
                    taskNumber={e.taskNumber}
                    heading={e.heading}
                    dateOfCreation={e.dateOfCreation}
                    expirationDate={e.expirationDate}
                    task={e.task}
                    projectNumber={projectNumber}
                    listName={"done"}
                    isCheck={e.isCheck}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
