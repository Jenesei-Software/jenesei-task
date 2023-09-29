import { Moment } from "moment";

type Priority = "short" | "average" | "high";
type CurrentStatus = "wait" | "work" | "done";

interface Task {
  isCheck: boolean;
  taskNumber: string;
  heading: string;
  description?: string;
  dateOfCreation: Moment;
  expirationDate: Moment;
  priority?: Priority;
  currentStatus?: CurrentStatus;
  attachedFiles?: File[];
  task: Task[];
}

interface Project {
  projectNumber: string;
  title: string;
  queue?: Task[];
  development?: Task[];
  done?: Task[];
}

interface ProjectsState {
  projects: Project[];
}

export type { Task, Project, ProjectsState, Priority, CurrentStatus };
