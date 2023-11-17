import { useState } from "react";
import {
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
} from "react-beautiful-dnd";

import { ProjectColumnItem } from "../atoms/project-column-item";
import { ProjectColumnItemAdd } from "../atoms/project-column-item-add";
import { Column, Task } from "@stores/projects/interfaces";
import { ModalEditColumn } from "@modules/modal-edit-column/organelles/modal-edit-column";
import {
  StyleProjectColumn,
  StyleProjectColumnHeader,
  StyleProjectColumnHeaderTitle,
  StyleProjectColumnList,
} from "./project-column.styles";
import { Another } from "@icons/another/another";

interface IProjectColumn {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  listName: string;
  projectNumber: string;
  changeIsAdd: (type?: string) => void;
  column: Column;
  changeIsDropDisabledModal: () => void;
  isDropDisabled: boolean;
  orientation: string;
  searchStateQuery: string;
}
export const ProjectColumn = (props: IProjectColumn) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const changeIsEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <StyleProjectColumn
        ref={props.provided.innerRef}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        snapshot={props.snapshot}
        {...props.provided.draggableProps}
        {...props.provided.dragHandleProps}
        style={{
          ...props.provided.draggableProps.style,
        }}
      >
        <StyleProjectColumnHeader>
          <StyleProjectColumnHeaderTitle>
            {props.listName}
          </StyleProjectColumnHeaderTitle>
          <Another.MoreCircle onClick={changeIsEdit} />
        </StyleProjectColumnHeader>
        {/* Project  Droppable*/}
        <Droppable
          isDropDisabled={props.isDropDisabled}
          droppableId={JSON.stringify({
            listName: props.listName,
            taskNumber: undefined,
          })}
          type="TASK"
        >
          {(provided) => (
            <StyleProjectColumnList
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.column.list.map((task: Task, index: number) => (
                // Task Draggable
                <ProjectColumnItem
                  {...task}
                  searchStateQuery={props.searchStateQuery}
                  orientation={props.orientation}
                  key={task.taskNumber}
                  projectNumber={props.projectNumber}
                  listName={props.listName}
                  index={index}
                  changeIsDropDisabledModal={props.changeIsDropDisabledModal}
                  isDropDisabled={props.isDropDisabled}
                  fullName={task.heading}
                  isFirstParent
                />
              ))}
              {provided.placeholder}
            </StyleProjectColumnList>
          )}
        </Droppable>
        <ProjectColumnItemAdd
          title="Add a Task"
          onClick={() => props.changeIsAdd(props.listName)}
        />
      </StyleProjectColumn>
      {isEdit && (
        <ModalEditColumn
          listName={props.listName}
          projectNumber={props.projectNumber}
          changeIsEdit={changeIsEdit}
          column={props.column}
        />
      )}
    </>
  );
};
