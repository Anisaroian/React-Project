import React from "react";
import { Form } from "react-bootstrap";
import { formDataEditTask } from "../../../data/mockData";

const FormComponent = ({ editableTask, handleChange }) => {
    return (
        <Form>
            {formDataEditTask.map((input, index) => {
                return <Form.Group className="mb-3" key={index}>
                    <Form.Label> {input.label}</Form.Label>
                    <Form.Control
                        type="text"
                        name={input.name}
                        //value={editableTask[input.name]}
                        onChange={handleChange}
                    />
                </Form.Group>
            })}
        </Form>
    );
}

export default FormComponent;