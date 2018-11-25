import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT_SUCCESS,
	LOGOUT_ERROR
} from './types';

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