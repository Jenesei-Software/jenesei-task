import { Moment } from "moment";

interface Task {
  taskNumber: number;
  heading: string;
  description?: string;
  dateOfCreation: Moment;
  timeAtWork: Moment;
  expirationDate: Moment;
  priority?: "short" | "average" | "high";
  currentStatus?: "wait" | "work" | "done";
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

export type { Task, Project, ProjectsState };
