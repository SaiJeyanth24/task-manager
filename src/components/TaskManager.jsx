import Task from "./Task"
import "../styles/taskmanager.css"

export default function TaskManager() {
    return (
        <section className="task-manager-panel">
            <div className="task-list">
                <Task title="Wire frontend to Spring Boot API" priority="High" due="Due Jul 8" completed={false} />
                <Task title="Add filter by status" priority="Medium" due="Due Jul 6" completed={false} />
                <Task title="Set up TaskForm component" priority="Low" due="Completed" completed={true} />
                <Task title="Scaffold TaskManager parent" priority="Medium" due="Completed" completed={true} />
            </div>
        </section>
    )
}