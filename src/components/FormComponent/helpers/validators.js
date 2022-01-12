export const isRequired = ({ value }) => value.length ? undefined : "Field is required";
export const nameValid = ({ value }) => value.match(/^[a-zA-Z]+$/)? undefined : "Only letters";
export const nameValidSec = ({ value }) => value.length >=4 ? undefined : "Please, write your full name";
export const validateEmail = ({ value }) => value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? undefined : "Write correct email,plases!";
export const numValid = ({ value }) => value.length <=9? undefined : "Phone number must contain 9 characters";
export const passwordValid = ({ value }) => value.length >= 8? undefined : "Too short for password. It must be more than 8 characters";
export const confirmPasswordValidator = ({ value, password }) => value === password ? undefined : "Wrong Confirmation of password!";

