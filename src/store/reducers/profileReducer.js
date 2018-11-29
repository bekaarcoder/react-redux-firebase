import {UPLOAD_SUCCESS, UPLOAD_ERROR, SET_LOADER} from '../actions/types';

const initialState = {
	uploadTask: null,
	loading: false
};

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_LOADER:
			return {
				...state,
				loading: true
			}
		case UPLOAD_SUCCESS:
			return {
				...state,
				uploadTask: true,
				loading: false
			}
		case UPLOAD_ERROR:
			return {
				...state,
				uploadTask: false,
				loading: false
			}
		default:
			return state;
	}
}

export default profileReducer;