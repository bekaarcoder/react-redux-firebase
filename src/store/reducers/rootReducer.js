import authReducer from './authReducer';
import projectReducer from './projectReducer';
import profileReducer from './profileReducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	projects: projectReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	profile: profileReducer
});

export default rootReducer;