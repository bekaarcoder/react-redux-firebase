import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Initialize firebase
const config = {
  apiKey: "AIzaSyDEldeQ2z6RJfzzUta2SKYklNKgyYo-Cn0",
  authDomain: "tasklist-34b9c.firebaseapp.com",
  databaseURL: "https://tasklist-34b9c.firebaseio.com",
  projectId: "tasklist-34b9c",
  storageBucket: "tasklist-34b9c.appspot.com",
  messagingSenderId: "815815892140"
};
firebase.initializeApp(config);
firebase.firestore().settings({
	timestampsInSnapshots: true
});

export default firebase;