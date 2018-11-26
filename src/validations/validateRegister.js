import isEmpty from './isEmpty';

const validateRegister = (data) => {
	let errors = {};

	if(isEmpty(data.fname)) {
		errors.fname = 'First Name cannot be empty';
	} else if(isEmpty(data.lname)) {
		errors.lname = 'Last Name cannot be empty';
	} else if(isEmpty(data.email)) {
		errors.email = 'Email cannot be empty';
	} else if(isEmpty(data.password)) {
		errors.password = 'Password cannot be empty';
	} else if(isEmpty(data.repeatPassword)) {
		errors.repeatPassword = 'Please enter your password again';
	} else if (data.password !== data.repeatPassword) {
		errors.repeatPassword = "Your password doesn't match";
	}

	return errors;
}

export default validateRegister;