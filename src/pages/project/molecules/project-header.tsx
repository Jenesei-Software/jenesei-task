import { useState } from "react";

import "../styles/project-header.css";

import { ProjectColumnItemAdd } from "../atoms/project-column-item-add";
import { ModalNewColumn } from "../../../modules/modal-new-column/organelles/modal-new-column";
import { ModalEditProject } from "../../../modules/modal-edit-project/organelles/modal-edit-project";
import { Project } from "../../../stores/projects/interfaces";
import { ProjectHeaderEdit } from "../atoms/project-header-edit";

interface IProjectHeader {
    title: string
    project: Project
}
export const ProjectHeader = (props: IProjectHeader) => {
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const changeIsAdd = () => {
        setIsAdd(!isAdd);
    };
    const changeIsEdit = () => {
        setIsEdit(!isEdit);
    };
    return (
        <>
            {isAdd && <ModalNewColumn projectNumber={props.project.projectNumber} changeIsAdd={changeIsAdd} />}
            {isEdit && <ModalEditProject project={props.project} changeIsAdd={changeIsEdit} />}
            <div className="ProjectHeader">
                <div className="ProjectHeader__logo">
                    {props.title}
                </div>
                <ProjectColumnItemAdd onClick={changeIsAdd} title={"Add a Column"} />
                <ProjectHeaderEdit onClick={changeIsEdit} />
            </div>
        </>
    );
};
