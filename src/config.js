import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCKKHNI1ElyZi1R4fHkJcvwoY1aD7fmREM",
    authDomain: "react-auth-ae57d.firebaseapp.com",
    projectId: "react-auth-ae57d",
    storageBucket: "react-auth-ae57d.appspot.com",
    messagingSenderId: "412698788050",
    appId: "1:412698788050:web:d13608fb7e8c599a09ad0b",
    measurementId: "G-997JGHYRF2"
});
export default firebaseConfig;