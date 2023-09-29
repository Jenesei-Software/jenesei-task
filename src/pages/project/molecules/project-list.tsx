import { ProjectListItem } from '../atoms/project-list-item';
import '../styles/project-list.css'

export const ProjectList = () => {
    return (
        <div className="ProjectList">
            <ProjectListItem title={'Макдональдс'} quantity={10} id={3} />
        </div>
    );
};
