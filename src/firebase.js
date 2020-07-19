import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyALh3AbYdOLik_zuhyPZ_u7o2ULa7zoeUA",
        authDomain: "facebook-messengers.firebaseapp.com",
        databaseURL: "https://facebook-messengers.firebaseio.com",
        projectId: "facebook-messengers",
        storageBucket: "facebook-messengers.appspot.com",
        messagingSenderId: "255903862745",
        appId: "1:255903862745:web:a3c1952513b70e8b8c93c8",
        measurementId: "G-DF6M6K7VEL"
});

const db  = firebaseApp.firestore();

export default db;