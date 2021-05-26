
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDnDS_WcgaKL7YilS3GJTSsilLMYWyiVuA",
    authDomain: "flipboard-561e8.firebaseapp.com",
    databaseURL: "https://flipboard-561e8.firebaseio.com",
    projectId: "flipboard-561e8",
    storageBucket: "flipboard-561e8.appspot.com",
    messagingSenderId: "857436733967",
    appId: "1:857436733967:web:adaa6fd0f72b3a60d8197a",
    measurementId: "G-BC250W2KEK"
  };


const Fire = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default Fire;