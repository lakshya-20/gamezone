import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCfTmEZHm-r2iOmv2rvM89c07AFD-u7IzM",
    authDomain: "gamezone-e43d9.firebaseapp.com",
    databaseURL: "https://gamezone-e43d9.firebaseio.com",
    projectId: "gamezone-e43d9",
    storageBucket: "gamezone-e43d9.appspot.com",
    messagingSenderId: "373260017226",
    appId: "1:373260017226:web:8dd8f34092d2a6681210b3"
  };

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase