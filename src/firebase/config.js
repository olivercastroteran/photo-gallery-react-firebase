import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCSAaXWQPytrd4w88mUCrvJTDTn7U5lOeY',
  authDomain: 'photo-gallery-react.firebaseapp.com',
  databaseURL: 'https://photo-gallery-react.firebaseio.com',
  projectId: 'photo-gallery-react',
  storageBucket: 'photo-gallery-react.appspot.com',
  messagingSenderId: '139352277758',
  appId: '1:139352277758:web:fdc69080f2e44c02085baf',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestoreDB = firebase.firestore();

export { projectFirestoreDB, projectStorage };
