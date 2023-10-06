import { Moment } from "moment";

type Priority = "short" | "average" | "high";
type CurrentStatus = "wait" | "work" | "done";

interface Task {
  taskNumber: string;

  isCheck: boolean;
  heading: string;
  description?: string;
  dateOfCreation: Moment;
  expirationDate: Moment;
  priority?: Priority;
  currentStatus?: CurrentStatus;
  attachedFiles?: File[];
  task?: Task[];
  comments?: Comment[];
}

interface Comment {
  commentId: string;
  content: string;
  comments?: Comment[];
}

interface ProjectType {
  queue?: Task[];
  development?: Task[];
  done?: Task[];
}

interface Project extends ProjectType {
  projectNumber: string;
  title: string;
}

interface ProjectsState {
  projects: Project[];
}

export type { Task, Project, ProjectsState, Priority, CurrentStatus, Comment, ProjectType };
