import firebase from 'firebase'

const config = {
apiKey: "AIzaSyBKrDBKpXw0nAuUGga0-Nxg3j2uAP0pq1E",
authDomain: "turnout-78756.firebaseapp.com",
databaseURL: "https://turnout-78756.firebaseio.com",
projectId: "turnout-78756",
storageBucket: "turnout-78756.appspot.com",
messagingSenderId: "684766132784"
};

export const firebaseApp = firebase.initializeApp(config)