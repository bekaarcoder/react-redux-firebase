import {CREATE_PROJECT} from './types';

export const createProject = (project, history) => {
	return(dispatch, getState, {getFirestore, getFirebase}) => {
		const firestore = getFirestore();

		const firstName = getState().firebase.profile.isEmpty ? 'Anonymous' : getState().firebase.profile.firstName;
		const lastName = getState().firebase.profile.isEmpty ? 'User' : getState().firebase.profile.lastName;
		const uid = getState().firebase.auth.uid;

		firestore.collection('projects').add({
			...project,
			authorFirstName: firstName,
			authorLastName: lastName,
			createdAt: new Date(),
			authorId: uid
		}).then((ref) => {
			history.push('/');
			dispatch({
				type: CREATE_PROJECT,
				payload: project
			});
		}).catch((error) => {
			console.log(error);
		});		
	}
}