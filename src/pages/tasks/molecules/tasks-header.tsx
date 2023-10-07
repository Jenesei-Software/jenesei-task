import { useState } from "react";

import "../styles/tasks-header.css";

import { TasksItemAdd } from "./tasks-item-add";
import { ModalNewColumn } from "../../../modules/modal-new-column/organelles/modal-new-column";
import { ModalEditProject } from "../../../modules/modal-edit-project/organelles/modal-edit-project";
import { Project } from "../../../store/projects/interfaces";
import { TasksHeaderProjectEdit } from "../atoms/tasks-header-project-edit";

interface ITasksHeader {
    title: string
    project: Project
}
export const TasksHeader = (props: ITasksHeader) => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const changeIsAdd = () => {
        setIsAdd(!isAdd);
    };
    const changeIsEdit = () => {
        setIsEdit(!isEdit);
    };
    return (
        <div className="TasksHeader">
            {isAdd && <ModalNewColumn projectNumber={props.project.projectNumber} changeIsAdd={changeIsAdd} />}
            {isEdit && <ModalEditProject project={props.project} changeIsAdd={changeIsEdit} />}
            <div className="TasksHeader__logo">
                {props.title}
            </div>
            <TasksItemAdd onClick={changeIsAdd} title={"Add a Column"} />
            <TasksHeaderProjectEdit onClick={changeIsEdit} />
        </div>
    );
};
