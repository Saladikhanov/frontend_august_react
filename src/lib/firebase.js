import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase as default };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDar1rxzNzmfVkR7xus1JE7lX5jwzBKrsA",
//   authDomain: "frontendaugust.firebaseapp.com",
//   projectId: "frontendaugust",
//   storageBucket: "frontendaugust.appspot.com",
//   messagingSenderId: "265736543210",
//   appId: "1:265736543210:web:26daacf13051e6fdc33093"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
