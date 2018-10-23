import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCGuLr_w12F_qcvuXJ76XiyMsLnAZrunx0",
    authDomain: "notebooks-e4990.firebaseapp.com",
    databaseURL: "https://notebooks-e4990.firebaseio.com",
    projectId: "notebooks-e4990",
    storageBucket: "notebooks-e4990.appspot.com",
    messagingSenderId: "577752367266"
});

export const db = firebaseApp.database();
export const firebaseAuth = firebase.auth;

// export const firebaseListen = function (callback) {
//     firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//             callback(user)
//         }
//     });
// };