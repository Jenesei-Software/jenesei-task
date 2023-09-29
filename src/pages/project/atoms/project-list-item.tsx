import { NavLink } from 'react-router-dom';
import '../styles/project-list-item.css'

interface IProjectListItem {
    title: string
    quantity: number
    id: number
}
export const ProjectListItem = (props: IProjectListItem) => {
    return (
        <div className="ProjectListItem">
            <div className="ProjectListItem__Title">
                {props.title}
            </div>
            <div className="ProjectListItem__Quantity">
                {props.quantity}
            </div>
            <NavLink className="ProjectListItem__Go" to={`/project/${props.id}`}>
                Перейти
            </NavLink>
        </div>
    );
};
