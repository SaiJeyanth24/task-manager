import "../styles/filter.css"

export default function Filter({ allTasks = [], activeTasks = [], completedTasks = [], selectedFilter = "all", onFilterChange = () => {} }) {
    return (
        <div className="task-filter-buttons">
            <button
                type="button"
                className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
                onClick={() => onFilterChange("all")}
            >
                All ({allTasks.length})
            </button>
            <button
                type="button"
                className={`filter-btn ${selectedFilter === "active" ? "active" : ""}`}
                onClick={() => onFilterChange("active")}
            >
                Active ({activeTasks.length})
            </button>
            <button
                type="button"
                className={`filter-btn ${selectedFilter === "completed" ? "active" : ""}`}
                onClick={() => onFilterChange("completed")}
            >
                Completed ({completedTasks.length})
            </button>
        </div>
    )
}