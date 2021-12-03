// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = firebase.initializeApp({
  apiKey: "AIzaSyAegmvMyPCWyouoBOm7UrY6fXKzaZzTcmc",
  authDomain: "todoist-demo-26dfc.firebaseapp.com",
  databaseURL: "https://todoist-demo-26dfc-default-rtdb.firebaseio.com",
  projectId: "todoist-demo-26dfc",
  storageBucket: "todoist-demo-26dfc.appspot.com",
  messagingSenderId: "378278464807",
  appId: "1:378278464807:web:1299448c2a076dc620ed02",
  measurementId: "G-NLV04NEY1P",
});

export { config as firebase };
