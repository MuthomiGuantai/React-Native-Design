import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjvT8GGrEnY6K1gfSVdqskdABOLwZoJ1w",
  authDomain: "myblog-4bcfd.firebaseapp.com",
  databaseURL: "https://myblog-4bcfd.firebaseio.com",
  projectId: "myblog-4bcfd",
  storageBucket: "myblog-4bcfd.appspot.com",
  messagingSenderId: "633298944549",
  appId: "1:633298944549:web:a71abb17de825edeeab5cc",
  measurementId: "G-QSBWNK6CR4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
