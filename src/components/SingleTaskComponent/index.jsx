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
                //console.log("🚀 ~ candidate", candidate)
                resolve(candidate);
            }, 200);
        })

    }
    useEffect(() => {
        getTaskFromDB(task_id)
            .then(task => {
                //console.log("🚀 ~ task", task)
                setTask(task);
            });
    }, [task_id]);

    if (!task) return <Loader />;

    return (
        <div className="single-task">
            <h1>Single Task / id = {task.id}</h1>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <Link to={`/project`}>
                <Button variant="dark">Back</Button>
            </Link>
        </div>
    )
}

export default SingleTaskComponent;