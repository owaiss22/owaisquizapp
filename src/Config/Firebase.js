import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCkirXagkncBSHDofdkTCeIeVN3fxFv3kM",
    authDomain: "owaisquizapp-1fc7a.firebaseapp.com",
    databaseURL: "https://owaisquizapp-1fc7a.firebaseio.com",
    projectId: "owaisquizapp-1fc7a",
    storageBucket: "owaisquizapp-1fc7a.appspot.com",
    messagingSenderId: "635623252291",
    appId: "1:635623252291:web:59c43a6506e96304108ff6",
    measurementId: "G-W9M22H390K"
};
firebase.initializeApp(firebaseConfig);

export default firebase;