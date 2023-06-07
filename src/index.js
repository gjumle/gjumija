import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA6zAl5IjPrzpdd9rDnxArSOugU5yYsUbI",
    authDomain: "gjumija-a1eb8.firebaseapp.com",
    projectId: "gjumija-a1eb8",
    storageBucket: "gjumija-a1eb8.appspot.com",
    messagingSenderId: "341848652712",
    appId: "1:341848652712:web:359b193527c45191e6fb9d",
    measurementId: "G-E1L3TSJZHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);