// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6zAl5IjPrzpdd9rDnxArSOugU5yYsUbI",
    authDomain: "gjumija-a1eb8.firebaseapp.com",
    projectId: "gjumija-a1eb8",
    storageBucket: "gjumija-a1eb8.appspot.com",
    messagingSenderId: "341848652712",
    appId: "1:341848652712:web:b531b0a1cab92511e6fb9d",
    measurementId: "G-0XBMEFP61D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);