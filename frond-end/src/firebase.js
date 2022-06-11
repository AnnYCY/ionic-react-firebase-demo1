// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
  apiKey: "AIzaSyBfibUdKGPBpQ4mctv-mGW0YhwsSJRPvTg",
  authDomain: "demo1-635b3.firebaseapp.com",
  databaseURL: "https://demo1-635b3-default-rtdb.firebaseio.com",
  projectId: "demo1-635b3",
  storageBucket: "demo1-635b3.appspot.com",
  messagingSenderId: "378435401481",
  appId: "1:378435401481:web:0f6dbdb9f6b563e33b45d8",
  measurementId: "G-0YV8YWTDGZ"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;