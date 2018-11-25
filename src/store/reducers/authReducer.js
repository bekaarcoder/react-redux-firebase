import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT_SUCCESS,
	LOGOUT_ERROR
} from '../actions/types';

const initialState = {
	authError: null
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case LOGIN_SUCCESS:
			console.log('login success');
			return {
				...state,
				authError: null
			};
		case LOGIN_ERROR:
			console.log(action.payload);
			return {
				...state,
				authError: action.payload.message
			}
		case LOGOUT_SUCCESS:
			console.log('User Logged out');
			return state;
		case LOGOUT_ERROR:
			console.log(action.payload);
			return state;
		default:
			return state;
	}
}

export default authReducer;
