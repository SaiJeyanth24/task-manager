
export default function Task({ title, priority, due, completed = false, dateStatus = "", onToggle = () => {}, onDelete = () => {}, disabled = false }) {
    return (
        <article className={`task-card ${completed ? "completed" : ""} ${dateStatus}`}>
            <div className="task-card-left">
                {!disabled && (
                    <label className="task-checkbox">
                        <input
                            type="checkbox"
                            checked={completed}
                            disabled={disabled}
                            onChange={(event) => onToggle(event.target.checked)}
                        />
                        <span className="task-checkbox-box"></span>
                    </label>
                )}

                <div className="task-card-main">
                    <h3>{title}</h3>
                    <p>{due}</p>
                </div>
            </div>

            {!disabled && (
                <div className="task-card-meta">
                    <span className={`task-badge task-badge-${priority.toLowerCase()}`}>{priority}</span>
                    <button type="button" className="task-delete" aria-label="Delete task" onClick={onDelete}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                        </svg>
                    </button>
                </div>
            )}
        </article>
    )
}