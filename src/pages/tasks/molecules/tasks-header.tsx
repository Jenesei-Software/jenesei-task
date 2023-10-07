import { useState } from "react";

import "../styles/tasks-header.css";

import { TasksItemAdd } from "./tasks-item-add";
import { ModalNewColumn } from "../../../modules/modal-new-column/organelles/modal-new-column";

interface ITasksHeader {
    title: string
    projectNumber: string
}
export const TasksHeader = (props: ITasksHeader) => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const changeIsAdd = () => {
        setIsAdd(!isAdd);
    };
    return (
        <div className="TasksHeader">
            {isAdd && <ModalNewColumn projectNumber={props.projectNumber} changeIsAdd={changeIsAdd} />}
            <div className="TasksHeader__logo">
                {props.title}
            </div>
            <TasksItemAdd onClick={changeIsAdd} title={"Add a Column"} />
        </div>
    );
};
