// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAegmvMyPCWyouoBOm7UrY6fXKzaZzTcmc",
  authDomain: "todoist-demo-26dfc.firebaseapp.com",
  databaseURL: "https://todoist-demo-26dfc-default-rtdb.firebaseio.com",
  projectId: "todoist-demo-26dfc",
  storageBucket: "todoist-demo-26dfc.appspot.com",
  messagingSenderId: "378278464807",
  appId: "1:378278464807:web:1299448c2a076dc620ed02",
  measurementId: "G-NLV04NEY1P"
};

// Initialize Firebase
const firebaseConfig = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig as firebase }
