import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

firebase.initializeApp({
    "projectId": "frb-consultorionaf",
    "appId": "1:337509352404:web:7985372db1775ab2b30c41",
    "storageBucket": "frb-consultorionaf.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCz9jsxySjZoX6rMZQgON9ff9CQL-GOJ20",
    "authDomain": "frb-consultorionaf.firebaseapp.com",
    "messagingSenderId": "337509352404"
});

export default firebase;
