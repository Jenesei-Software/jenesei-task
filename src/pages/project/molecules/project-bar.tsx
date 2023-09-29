import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import '../styles/project-bar.css'
import { addProject } from '../../../redux/projects/actions';
import { useState } from 'react';

export const ProjectBar = () => {
    const [isActiveAdd, setIsActiveAdd] - useState<boolean>(false);
    const dispatch = useDispatch();
    const createNewProject = () => {
        const newProject = {
            projectNumber: v4(),
            title: "New Project",
            queue: [],
            development: [],
            done: [],
        };
        dispatch(addProject(newProject));
    };
    return (
        <div className="ProjectBar">
            <div className="ProjectBar__Add">
                <div className="ProjectBar__Add__Title">
                    Создать проект
                </div>
            </div>
            <div className="ProjectBar__Sort">
                <div className="ProjectBar__Sort__Title">
                    Сортировка
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};
