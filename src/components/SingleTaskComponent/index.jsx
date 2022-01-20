import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Reusable/Spinner";
import "./styles.css";

const SingleTaskComponent = () => {
    const [task, setTask] = useState(null);
    const { task_id } = useParams();
    const getTaskFromDB = (taskId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tasks = JSON.parse(localStorage.getItem('tasks'));
                const candidate = tasks.find(task => task.id === taskId);
                resolve(candidate);
            }, 200);
        })

    }
    useEffect(() => {
        getTaskFromDB(task_id)
            .then(task => {
                setTask(task);
            });
    }, [task_id]);

    if (!task) return <Loader />;

    return (
        <div className="single-task">
            <p>Task title : <span>{task.title}</span></p>
            <p>Must do: <span>{task.attachedTo}</span></p>
            <p>Task description : <span>{task.description}</span></p>
            <p>Task status : <span>{task.status}</span></p> <br />
            <Link to={`/project`}>
                <Button variant="dark">Go Back!</Button>
            </Link>
        </div>
    )
}

export default SingleTaskComponent;