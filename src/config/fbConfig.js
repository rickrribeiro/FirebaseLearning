import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyDCCzIlniCOc2J8Hzb-WYzct6s5JHXvgeM",
    authDomain: "marioplan-b6d7d.firebaseapp.com",
    databaseURL: "https://marioplan-b6d7d.firebaseio.com",
    projectId: "marioplan-b6d7d",
    storageBucket: "",
    messagingSenderId: "236557872731"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  export default firebase;
