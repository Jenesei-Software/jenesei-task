import { useParams } from "react-router-dom";
import { Task } from "../../../redux/projects/interfaces";

export const TasksItem = (props: Task) => {
    const { id } = useParams();
    const createNewSubTask = () => {
        const newSubTask = { /* ... */ };
        const projectId = id;
        const parentTaskId = props.taskNumber;
        //   dispatch(addTask(projectId, newSubTask, parentTaskId)); // Для создания подзадачи
    };
    return (
        <div className="TasksItem">
            ау
        </div>
    );
};
