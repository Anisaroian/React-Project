import { Button } from "react-bootstrap";
import { useState } from "react";
import { formData, formValidators, initialFormCurrentData } from "../../data";
import FormGroup from "../FormGroup";
import "./styles.css";

const Form = () => {
    const [formCurrentData, setFormCurrentData] = useState(initialFormCurrentData);
    const getErrorsAfterValidation = (value, validators) => {
        const errors = [];
        validators.forEach(validator => {
            const error = validator(value);
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    }

    const getValidationValues = (name, value) => {
        const validationValues = { value };
        if (name === "confirmPassword")
            validationValues["password"] = formCurrentData.password.value;

        return validationValues;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const validators = formValidators[name];
        const validationValues = getValidationValues(name, value);

        const error = getErrorsAfterValidation(validationValues, validators);
        setFormCurrentData(prev => {
            return {
                ...prev,
                [name]: {
                    touched: true,
                    error,
                    value
                }
            }
        });
    }
    return (
        <div className="form">
            <div className="form-header">
                <h2>Form Validation</h2>
            </div>
            <div className="form-part">
                {formData.map(data => {
                    return (
                        <FormGroup
                            {...data}
                            key={data.id}
                            onChange={handleInputChange}
                            input={formCurrentData[data.name]}
                        />
                    )
                })}
            </div> 
        </div>
    )
}

export default Form;