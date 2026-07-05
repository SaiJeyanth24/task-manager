import Task from "./Task"
import "../styles/taskmanager.css"

function getOrdinal(day) {
    if (day >= 11 && day <= 13) return "th"
    switch (day % 10) {
        case 1:
            return "st"
        case 2:
            return "nd"
        case 3:
            return "rd"
        default:
            return "th"
    }
}

function formatTaskDate(date) {
    const month = date.toLocaleString("en-US", { month: "long" })
    const day = date.getDate()
    return `${month} ${day}${getOrdinal(day)}`
}

export default function TaskManager({ tasks, onToggleTask = () => {}, onDeleteTask = () => {} }) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (tasks.length === 0) {
        return (
            <section className="task-manager-panel">
                <div className="task-list">
                    <article className="task-card placeholder">
                        <p>No tasks yet. Add your first task above.</p>
                    </article>
                </div>
            </section>
        )
    }

    return (
        <section className="task-manager-panel">
            <div className="task-list">
                {tasks.map((task, index) => {
                    const completed = task.status === "complete"
                    const priority = task.priority.charAt(0).toUpperCase() + task.priority.slice(1)

                    let due = ""
                    let dateStatus = ""

                    if (completed) {
                        due = "Completed"
                    } else {
                        const dueDate = new Date(task.date)
                        dueDate.setHours(0, 0, 0, 0)
                        const diffMs = dueDate - today
                        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))

                        if (diffDays === -1) {
                            due = "Yesterday"
                            dateStatus = "due-past"
                        } else if (diffDays === 0) {
                            due = "Today"
                            dateStatus = "due-today"
                        } else if (diffDays === 1) {
                            due = "Tomorrow"
                            dateStatus = "due-tomorrow"
                        } else {
                            due = formatTaskDate(dueDate)
                            if (diffDays < 0) {
                                dateStatus = "due-past"
                            }
                        }
                    }

                    return (
                        <Task
                            key={`${task.text}-${index}`}
                            title={task.text}
                            priority={priority}
                            due={due}
                            completed={completed}
                            dateStatus={dateStatus}
                            onToggle={(checked) => onToggleTask(task, checked)}
                            onDelete={() => onDeleteTask(task)}
                        />
                    )
                })}
            </div>
        </section>
    )
}