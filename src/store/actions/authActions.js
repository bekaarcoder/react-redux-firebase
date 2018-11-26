import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT_SUCCESS,
	LOGOUT_ERROR,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS
} from './types';
import validateRegister from '../../validations/validateRegister';
import isEmpty from '../../validations/isEmpty';

export const loginUser = ({email, password}) => {
	return(dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({
					type: LOGIN_SUCCESS
				})
			}).catch((error) => {
				dispatch({
					type: LOGIN_ERROR,
					payload: error
				})
			});
	}
}

export const logoutUser = () => {
	return(dispatch, getState, {getFirebase}) => {
		const firebase = getFirebase();

		firebase.auth().signOut()
			.then(() => {
				dispatch({
					type: LOGOUT_SUCCESS
				});
			}).catch((error) => {
				dispatch({
					type: LOGOUT_ERROR,
					payload: error
				})
			})
	}
}

export const registerUser = (userData) => {
	return(dispatch, getState, {getFirebase, getFirestore}) => {

		const errors = validateRegister(userData);
		if(!isEmpty(errors)) {
			dispatch({
				type: SIGNUP_ERROR,
				payload: errors
			})
		} else {
				const firebase = getFirebase();
				const firestore = getFirestore();
				const serverSideErrors = {}

				firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
					.then((response) => {
						return firestore.collection('users').doc(response.user.uid).set({
							firstName: userData.fname,
							lastName: userData.lname,
							initials: userData.fname[0] + userData.lname[0]
						});
					}).then(() => {
						dispatch({
							type: SIGNUP_SUCCESS
						})
					}).catch((error) => {
						if(error.code === 'auth/invalid-email' || error.code === 'auth/email-already-in-use') {
							serverSideErrors.email = error.message;
						} else if(error.code === 'auth/weak-password') {
							serverSideErrors.password = error.message;
						}

						dispatch({
							type: SIGNUP_ERROR,
							payload: serverSideErrors
						});
					});
		}
	}
} 