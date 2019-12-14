import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAkv9EfLSrZkYwWRaAl2-ErgVFOoqOC8u4",
    authDomain: "gallery-app-29b3a.firebaseapp.com",
    databaseURL: "https://gallery-app-29b3a.firebaseio.com",
    projectId: "gallery-app-29b3a",
    storageBucket: "gallery-app-29b3a.appspot.com",
    messagingSenderId: "54437726811",
    appId: "1:54437726811:web:9c5d20c241a6f8ffdd0d7e",
    measurementId: "G-QRHWEEXTWK"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }