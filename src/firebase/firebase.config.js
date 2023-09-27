// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWe6-ofsRoiJwTgD0h9IJehztDI4bNZGg",
    authDomain: "the-news-dragon-client-70775.firebaseapp.com",
    projectId: "the-news-dragon-client-70775",
    storageBucket: "the-news-dragon-client-70775.appspot.com",
    messagingSenderId: "551596727555",
    appId: "1:551596727555:web:62612e79572c114ec55d36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;