import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Todo from "./components/ToDo";
import { tasks } from "./data/mockData";
import "./styles.css";
import { FaEdit } from 'react-icons/fa';

const Project = () => {
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const [mockTasks, setMockTasks] = useState(tasks);
    const [editableTask, setEditableTask] = useState(false);
    const handleOpenAddTaskModal = () => {
        setAddTaskModalVisible(true);
    }
    const handleCloseAddTaskModal = () => {
        setAddTaskModalVisible(false);
    }
    const handleDeleteTask = useCallback((id) => {
        setMockTasks((prevData) => prevData.filter(item => item.id !== id));
    }, []);
    const toggleStatusChange = useCallback((id) => {
        setMockTasks((prevData) => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";
            copyData[idx] = {
                ...copyData[idx],
                status
            }
            return copyData;
        });
    }, []);

    const addTask = (formData) => {
        const { title, description, attachedTo } = formData;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            copyData.push({
                id: Math.random(),
                title: title.value,
                description: description.value,
                status: "Active",
                attachedTo: attachedTo.value
            });
            return copyData;
        }));
        handleCloseAddTaskModal();
    }
    return (
        <div className="project-container">
            <div className="text-center">
                <h1 className="heading1">
                    Todo Project
                </h1>
                <Button
                    onClick={handleOpenAddTaskModal}
                >
                   <FaEdit /> Create Task 
                </Button>
            </div>
            <div className="task-part">
                <Todo
                    mockTasks={mockTasks}
                    handleDeleteTask={handleDeleteTask}
                    toggleStatusChange={toggleStatusChange}
                />

                {addTaskModalVisible && <AddTask
                    onHide={handleCloseAddTaskModal}
                    onSubmit={addTask}
                />}

                {editableTask && <EditTask
                    task={editableTask}
                />}
            </div>
        </div>
    )
}


export default Project; 