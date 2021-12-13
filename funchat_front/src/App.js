import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Signup from './components/signup/SignUp';

import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// const app = firebase.initializeApp({
//     apiKey: "AIzaSyCkwaZiSW8LxW-0kODvTxRSB3YzEL1wYwI",
//     authDomain: "fir-practice-85948.firebaseapp.com",
//     projectId: "fir-practice-85948",
//     storageBucket: "fir-practice-85948.appspot.com",
//     messagingSenderId: "77523700392",
//     appId: "1:77523700392:web:033684b4b7f0220d93509d"
// })


function App() {

  // const [user]=useAuthState(firebase.auth)
  return (
    <div className="App">
        <Signup/>
        {/* <Main/> */}
    </div>
  );
}

export default App;
