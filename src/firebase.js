import firebase from "firebase";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyBlg2RthTrPShVYl35MFhXocodx0Otl7f8",

  authDomain: "cekresiindah-5a80b.firebaseapp.com",

  databaseURL: "https://cekresiindah-5a80b-default-rtdb.firebaseio.com",

  projectId: "cekresiindah-5a80b",

  storageBucket: "cekresiindah-5a80b.appspot.com",

  messagingSenderId: "737317532672",

  appId: "1:737317532672:web:da979dbb26f4f2616654e5"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();

export default database;
