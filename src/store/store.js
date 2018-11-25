import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import rootReducer from './reducers/rootReducer';
import fbConfig from '../config/fbConfig';

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	initialState,
	composeEnhancers(
		applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
	)
);

export default store;

