import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJz43oh_K-7d3GKwOR0QBVrXI85MV3fLg",
    authDomain: "twitter-clone-97151.firebaseapp.com",
    databaseURL: "https://twitter-clone-97151.firebaseio.com",
    projectId: "twitter-clone-97151",
    storageBucket: "twitter-clone-97151.appspot.com",
    messagingSenderId: "159533192474",
    appId: "1:159533192474:web:165177f59ac9c0acd148a3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;