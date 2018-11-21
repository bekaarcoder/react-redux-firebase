import {CREATE_PROJECT} from './types';

export const createProject = (project) => {
	return(dispatch, getState, {getFirestore, getFirebase}) => {
		const firestore = getFirestore();

		firestore.collection('projects').add({
			...project,
			authorFirstName: 'Bruce',
			authorLastName: 'Lee',
			createdAt: new Date(),
			authorId: 12345
		}).then((ref) => {
			console.log("Ref ID added: ", ref.id);
			dispatch({
				type: CREATE_PROJECT,
				payload: project
			});
		}).catch((error) => {
			console.log(error);
		});		
	}
}