import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDNZraaT9bKobwUJBjADqWx0Nq0xv6xJ1w",
	authDomain: "goalcoach-9b677.firebaseapp.com",
	databaseURL: "https://goalcoach-9b677.firebaseio.com",
	projectId: "goalcoach-9b677",
	storageBucket: "",
	messagingSenderId: "454951602229"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
