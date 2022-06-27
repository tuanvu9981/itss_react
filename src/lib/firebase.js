import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbX_vLc6qDdGo98hXOHCJHFHhG4gZNs4A",
  authDomain: "fir-itssjap1.firebaseapp.com",
  projectId: "fir-itssjap1",
  storageBucket: "fir-itssjap1.appspot.com",
  messagingSenderId: "441769451550",
  appId: "1:441769451550:web:42b25c74063fbe6bec8e0f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FIREBASE_COLLECTION = 'todos';

export const getAllTodos = async () => {
  const snapshot = await firebase.firestore().collection(FIREBASE_COLLECTION).get();

  const mapData = snapshot.docs.map(doc => {
    return {
      documentId: doc.id, //collection id in firebase
      text: doc.data().text,
      done: doc.data().done
    }
  });
  // console.log(mapData);
  return mapData;
}

export const addNewTodo = async (newTodo) => {
  return await firebase.firestore().collection(FIREBASE_COLLECTION).add(newTodo);
}

export const changeTodoStatus = async (id) => {
  // console.log(id); 
  const updatedTodo = firebase.firestore().collection(FIREBASE_COLLECTION).doc(id);
  return updatedTodo.update({ "done": !updatedTodo.done })
}

export const deleteAllTodos = async (ids) => {
  for (const id of ids) {
    await firebase.firestore().collection(FIREBASE_COLLECTION).doc(id).delete();
  }
}

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
}