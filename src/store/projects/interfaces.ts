import { Moment } from "moment";

export const PriorityStatusList = {
  short: { color: "#0AAAF4" },
  average: { color: "#F8BD1C" },
  high: { color: "#FF3838" },
} as const;
export const CurrentStatusList = {
  wait: { color: "#1AD698" },
  work: { color: "#4339F2" },
  done: { color: "#891BE8" },
} as const;

type PriorityStatus = keyof typeof PriorityStatusList;
type CurrentStatus = keyof typeof CurrentStatusList;

interface Comment {
  commentNumber: string;
  content: string;
  comments?: Comment[];
}

interface Task {
  taskNumber: string;
  isCheck: boolean;
  heading: string;
  description?: string;
  dateOfCreation: Moment;
  expirationDate: Moment;
  priorityStatus?: PriorityStatus;
  currentStatus?: CurrentStatus;
  attachedFiles?: File[];
  task?: Task[];
  comments?: Comment[];
}

interface Column {
  list: Task[];
  description?: string;
}

interface Project {
  projectNumber: string;
  title: string;
  backgroundLink?: string;
  columns: {
    [columnName: string]: Column;
  };
}

interface ProjectsState {
  projects: Project[];
}

export type {
  ProjectsState,
  Project,
  Column,
  Task,
  Comment,
  PriorityStatus,
  CurrentStatus,
};
