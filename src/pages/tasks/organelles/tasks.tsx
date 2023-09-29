import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Tasks = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const createNewTask = () => {
        const newTask = { /* ... */ };
        const projectId = id;
        //   dispatch(addTask(projectId, newTask)); // Для создания обычной задачи
    };
    return (
        <div className="tasks">
            ау
        </div>
    );
};
