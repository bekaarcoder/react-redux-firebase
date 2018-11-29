import {UPLOAD_SUCCESS, UPLOAD_ERROR, SET_LOADER} from './types';

export const uploadSelectedFile = (file) => {
	return(dispatch, getState, {getFirebase}) => {
		dispatch({
			type: SET_LOADER
		});
		const firebase = getFirebase();
		const uid = getState().firebase.auth.uid;

		const storageRef = firebase.storage().ref(`display_pics/${uid}/${file.name}`);

		// upload file
		const uploadTask = storageRef.put(file);

		uploadTask.on('state_changed', function(snapshot) {
			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log(progress, "% done");
		}, function(error) {
			console.log(error);
			dispatch({
				type: UPLOAD_ERROR
			})
		}, function() {
			console.log("Upload complete");
			dispatch({
				type: UPLOAD_SUCCESS
			})
			uploadTask.snapshot.ref.getDownloadURL().then(url => {
				const user = firebase.auth().currentUser;
				user.updateProfile({
					photoURL: url
				});
			});
		})
	}
}