import React, { memo } from "react";
import Task from "../Task";
import "./styles.css";

const Todo = ({
    mockTasks,
    handleDeleteTask,
    toggleStatusChange
}) => {


    return (
        <div className="tasks-wrapper">
            {mockTasks.map(task => (
                <Task
                    {...task}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    toggleStatusChange={toggleStatusChange}
                />
            ))}
        </div>
    )
}

export default memo(Todo); 