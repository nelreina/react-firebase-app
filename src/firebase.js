import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account',
        setAllowNewAccounts: false
      }
    },],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
}

export const app = firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();

const db = firebase.firestore();


export const userCollection = db.collection('users');
export const settingsCollection = db.collection('settings');

export const getSettings = async (setState) => {
  // let settings = (await settingsCollection.get()).docs[0]
  let settings = await (await settingsCollection.doc('settings')).get();

  setState((previousState) => {
    return { ...settings.data() }
  })
}

export const userSnapshot = (setData) => {
  userCollection.onSnapshot((snap) => {
    const users = [];
    snap.forEach(doc => {
      const data = { id: doc.id, ...doc.data() }
      users.push(data)
    })
    setData(users);
  })

}

export default db;