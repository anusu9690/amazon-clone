import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXyJpEgYTsGa9e4TvbUkQSIapfWENO8L8",
    authDomain: "clone-mar-d1421.firebaseapp.com",
    projectId: "clone-mar-d1421",
    storageBucket: "clone-mar-d1421.appspot.com",
    messagingSenderId: "454558483108",
    appId: "1:454558483108:web:d5cd4859468cb583509c31",
    measurementId: "G-T3LP446JC1"
});


const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };