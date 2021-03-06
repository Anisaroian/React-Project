import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./styles.css";


const Task = ({
    title,
    description,
    status,
    id,
    attachedTo,
    handleDeleteTask,
    toggleStatusChange,
    editBtnOpen
}) => {
    const statusClassName = status.toLowerCase() === "done" ? "status-done" : "status-active";
    const statusBtn = status.toLowerCase() === "done" ? "Active" : "Done"
    return (
        <Card style={{ width: '18rem' }} className="card1">
            <Card.Body>
                <Card.Title>
                    <Link to={`/task/${id}`} style={{
                        fontFamily: "'Lora', serif",
                        color: "black",
                        textDecoration: "none"
                    }}>
                        {title}
                    </Link>
                </Card.Title>
                <Card.Title className="must-do-text">Must do : {attachedTo}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text className="status-text">
                    Status:
                    <span className={statusClassName}>
                        &nbsp;{status}
                    </span>
                </Card.Text>
                <Card.Text>
                    {/* Date  :  {new Date(date).format("YYYY MM DD")} */}
                </Card.Text>
                <Button variant="danger mr-2"
                    onClick={() => handleDeleteTask(id)}
                >
                    Delete<FaTrashAlt />
                </Button>
                <Button variant="warning mr-2"
                    onClick={() => editBtnOpen(id)}
                    >Edit <FaEdit /></Button>
                <Button
                    variant={`${statusBtn === "Active" ? "success" : "primary"} `}
                    onClick={() => toggleStatusChange(id)}
                >
                    {statusBtn}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default memo(Task); 