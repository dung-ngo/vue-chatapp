import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBGgWv1IoAw8kwp2zGtJDRPLaS2I0UGo10",
    authDomain: "vue-firechatapp.firebaseapp.com",
    projectId: "vue-firechatapp",
    storageBucket: "vue-firechatapp.appspot.com",
    messagingSenderId: "804543649081",
    appId: "1:804543649081:web:08cfc6d017f0f6214104e8"
};

const db = firebase.initializeApp(config);

export default db;