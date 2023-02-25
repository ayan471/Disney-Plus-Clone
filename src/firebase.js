import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8BHt0CmJxe0Y39Mfu746ZG0pmjcnQvyc",
  authDomain: "disneyplus-clone-52217.firebaseapp.com",
  projectId: "disneyplus-clone-52217",
  storageBucket: "disneyplus-clone-52217.appspot.com",
  messagingSenderId: "483884356967",
  appId: "1:483884356967:web:cc27340f7009c436418bc2",
  measurementId: "G-BXCE56GQGX",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
