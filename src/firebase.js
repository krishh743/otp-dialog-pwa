import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAanEL_6LiWxaoecA2NaIjhnzb_IInlbEg",
  authDomain: "registeration-form-pwa.firebaseapp.com",
  databaseURL: "https://registeration-form-pwa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "registeration-form-pwa",
  storageBucket: "registeration-form-pwa.appspot.com",
  messagingSenderId: "742744419302",
  appId: "1:742744419302:web:e77f879ced50027c25c427",
  measurementId: "G-4GTE0176T4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase;