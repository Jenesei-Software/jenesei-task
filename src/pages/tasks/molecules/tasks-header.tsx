import "../styles/tasks-header.css";

interface ITasksHeader {
    title: string
}
export const TasksHeader = (props: ITasksHeader) => {
    return (
        <div className="TasksHeader">
            <div className="TasksHeader__logo">
                {props.title}
            </div>
        </div>
    );
};
