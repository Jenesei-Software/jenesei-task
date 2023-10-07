import { Moment } from "moment";

export const PriorityList = {
  short: { color: "#0AAAF4" },
  average: { color: "#F8BD1C" },
  high: { color: "#FF3838" },
} as const;
export const CurrentStatusList = {
  wait: { color: "#1AD698" },
  work: { color: "#4339F2" },
  done: { color: "#891BE8" },
} as const;

type Priority = keyof typeof PriorityList;
type CurrentStatus = keyof typeof CurrentStatusList;

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
  columns: {
    [columnName: string]: {
      list: Task[];
      description?: string;
    };
  };
}

interface Project extends ProjectType {
  projectNumber: string;
  title: string;
  backgroundLink?: string;
}

interface ProjectsState {
  projects: Project[];
}

export type {
  Task,
  Project,
  ProjectsState,
  Priority,
  CurrentStatus,
  Comment,
  ProjectType,
};
