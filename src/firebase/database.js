import firebase from 'firebase' 

var config = {
    apiKey: "AIzaSyCczdo9LBPvWemBbcl4W03GYGw0x8Cb96k",
    authDomain: "sampleapp-e62a3.firebaseapp.com",
    databaseURL: "https://sampleapp-e62a3.firebaseio.com",
    projectId: "sampleapp-e62a3",
    storageBucket: "sampleapp-e62a3.appspot.com",
    messagingSenderId: "1075161593099"
  };
  firebase.initializeApp(config);

  export const auth  = firebase.auth();
  export const database = firebase.database();