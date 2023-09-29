import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/installations';
const firebaseConfig = {
    apiKey: "AIzaSyBz2T-4s0iziNsRaP17xd3BHyVRfosTE2g",
    authDomain: "netflix-clone-60783.firebaseapp.com",
    projectId: "netflix-clone-60783",
    storageBucket: "netflix-clone-60783.appspot.com",
    messagingSenderId: "761022899923",
    appId: "1:761022899923:web:e77357411f2469a7885626",
    measurementId: "G-6VQS3GKCZK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { auth }; 
  export default db;