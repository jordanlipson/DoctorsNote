import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBhBnHZ3sHxmek_7Otx_a4RvLiM_zGG_eQ',
  authDomain: 'doctorsnote-c8b51.firebaseapp.com',
  databaseURL: 'https://doctorsnote-c8b51.firebaseio.com',
  projectId: 'doctorsnote-c8b51',
  storageBucket: 'doctorsnote-c8b51.appspot.com',
  messagingSenderId: '217099342123',
  appId: '1:217099342123:android:bac104cd03dc711ec7356e',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };