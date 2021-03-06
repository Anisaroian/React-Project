import React, { useCallback, useState, useEffect  } from "react";
import { Button } from "react-bootstrap";
import { idGenerator } from "../helpers/globalFunctions";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Todo from "./components/ToDo";
import { tasks } from "./data/mockData";
import "./styles.css";
import { FaEdit } from 'react-icons/fa';

const Project = () => {
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const [mockTasks, setMockTasks] = useState(tasks);
    
    const [editableTask, setEditableTask] = useState('');
    const handleEditTaskOpen = (id) => {
        setEditableTask(mockTasks.filter(item => item.id === id)[0]);
    }
    const handleEditTaskClose = () => {
        setEditableTask(false);
    }
    const editTask =  useCallback((editableTask) => {
        const { title, description, attachedTo,status, id } = editableTask;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            copyData[idx] = {
                id: id,
                title: title.value || title,
                description: description.value || description,
                status: status,
                attachedTo: attachedTo.value || attachedTo
            }
            setTasksToDB(copyData);
            return copyData;
        }));
        handleEditTaskClose();
    },[]);


    const handleOpenAddTaskModal = () => {
        setAddTaskModalVisible(true);
    }
    const handleCloseAddTaskModal = () => {
        setAddTaskModalVisible(false);
    }
    const handleDeleteTask = useCallback((id) => {
        setMockTasks((prevData) => {
            const newTasks = prevData.filter(item => item.id !== id);
            setTasksToDB(newTasks);
            return newTasks;
    });
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
            setTasksToDB(copyData);
            return copyData;
        });
    }, []);

    const setNewTaskToDB = (task) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const setTasksToDB = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }


    const addTask = (formData) => {
        const { title, description, attachedTo } = formData;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const newTask= {
                id: idGenerator(),
                title: title.value,
                description: description.value,
                status: "Active",
                attachedTo: attachedTo.value
            };

            setNewTaskToDB(newTask);
            copyData.push(newTask);
            return copyData;
        }));
        handleCloseAddTaskModal();
    }

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (!tasks)
            localStorage.setItem("tasks", JSON.stringify([]));
        else
            setMockTasks(JSON.parse(tasks));

    }, []);
    
    return (
        <div className="project-container">
            <div className="text-center">
                <h1 className="heading1">
                    Todo Project
                </h1>
                <Button variant="outline-dark"
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
                    editBtnOpen={handleEditTaskOpen}
                />

                {addTaskModalVisible && <AddTask
                    onHide={handleCloseAddTaskModal}
                    onSubmit={addTask}
                />}

                {editableTask && <EditTask
                    task={editableTask}
                    onHide={handleEditTaskClose}
                    onSubmit={editTask}
                />}
            </div>
        </div>
    )
}


export default Project; 