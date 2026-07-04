
import "../styles/taskform.css"

export default function TaskForm() {
    return(
        <div className="task-form">
            <input type="text" placeholder="Add a new task"/>
            <button type="button">+ Add</button>
        </div>
    )
}